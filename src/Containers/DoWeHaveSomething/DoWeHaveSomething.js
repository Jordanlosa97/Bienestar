import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './DoWeHaveSomething.css';
import logo from '../../images/ic_logo-web.png'

import firebase  from '../../Intances/firebase.js'
import background from '../../images/warehouse.jpeg';
import {Container} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar.js';

class DoWeHaveSomething extends Component {
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
            <h3 className={classes.texttitle}>{'¿Tenemos un objeto tuyo?'}</h3>
          </div>
          <div className={classes.blueBackground}>
            <p className={classes.text}>No te angusties. Tus pertenencias están seguras con nosotros. Si tu objeto está en la lista de lo que se encuentra en objetos perdidos, deberás acercarte a la oficina ubicada detrás del Edificio F con tu ID, tu cedula y un número de teléfono para poderte contactar en caso de necesitarte nuevamente. Deberás llenar un formulario, y así podrás recuperar tus pertenencias.</p>
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

export default DoWeHaveSomething;
