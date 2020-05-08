import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './FoundSomething.css';
import logo from '../../images/ic_logo-web.png'

import firebase  from '../../Intances/firebase.js'
import background from '../../images/suprisedWoman.jpeg';
import {Container} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar.js';

class FoundSomething extends Component {
  state = {
    rol : 'Estudiante',
    user: '',
    hideNav: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth <= 500);
    if (currentHideNav !== this.state.hideNav) {
        this.setState({hideNav: currentHideNav});
    }
  }

  UNSAFE_componentWillMount(){
    console.log('se actualiza')
    const _this = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        const uid = user.uid
        firebase.database().ref('users/' + uid).once('value').then(function(snapshot) {
          var rol = (snapshot.val() && snapshot.val().rol) || 'Anonymous';
            if(rol === 'Estudiante')
            {
              //Enviar a pantalla estudiante
              console.log('estudiante usuario');
              _this.setState({
                user: user,
                rol: 'Estudiante'
              })
            }
            else
            {
              //Enviar a administrador
              console.log('admin usuario');
              _this.setState({
                user: user,
                rol: 'Administrador'
              })
            }
          })
        
      } else {
        // No user is signed in.
        console.log("user null")
        _this.props.history.push("/home")
      }
    });
  }

  renderNavbar(){
    if(window.innerWidth >= 500){
      return (
        <Navbar history = {this.props.history}/>
      )
    }
    else{
      return(<div></div>)
    }
  }
  
  render() {
    return (
      <Container className={classes.Home}>
        {this.renderNavbar()}

        <img alt={'ds'} className={classes.background} src={background}></img>

        <div className={classes.icon}>
          <img alt={'ds'} className={classes.logo} src={logo}></img>
          <h1 className={classes.title}>B-Sabana</h1>
        </div>

        <div className={classes.menu}>
          <div className={classes.titlemenu}>
            <h3 className={classes.texttitle}>{'¿Encontraste algo?'}</h3>
          </div>
          <div className={classes.blueBackground}>
            <p className={classes.text}>Si encontraste algo en el campus de la universidad, deberás acercarte con tu ID a la oficina de objetos perdidos ubicada detrás del Edificio F, y le vas a entregar el objeto a la persona que se encuentre atendiendo en el momento en el que vayas. Es un proceso rápido y sencillo, y así podrás ayudar a alguien que haya perdido algún objeto de valor.</p>
          </div>
        </div>
        
        <div className={classes.cloud}>
          <div className={`${classes.bola}  ${classes.bola1}`}></div>
          <div className={`${classes.bola}  ${classes.bola2}`}></div>
          <div className={`${classes.bola}  ${classes.bola3}`}></div>
          <div className={`${classes.bola}  ${classes.bola4}`}></div>
        </div>
      </Container>
    );
  }
}

export default FoundSomething;
