import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './LostObjects.css';
import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'
import plus from '../../images/plusIcon.png'
import objectlost from '../../images/objectLost.jpeg';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'



class InitialMenu extends Component {
  
  state={
    smShow:false,
    email: '',
    password: ''
  }
  setSmShow = (s) => {
    this.setState({
      smShow: s
    })
  }

  loginMicrosoft = () => {
    console.log("Logeando con microsoft")
    provider.setCustomParameters({
      // Force re-consent.
      prompt: 'consent',
      // Target specific email with login hint.
      login_hint: 'student@unisabana.edu.co'
    });
    const _this = this;
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user)
        firebase.database().ref('users/' + result.user.uid).once('value').then(function(snapshot) {
        var rol = (snapshot.val() && snapshot.val().rol) || 'Anonymous';
        if(rol === 'Anonymous')
        {
          console.log('Nuevo usuario');
          firebase.database().ref('users/' + result.user.uid).set({
          rol: 'Estudiante'
            })
        }
        else
        {
          if(rol === 'Estudiante')
          {
            //Enviar a pantalla estudiante
            console.log('estudiante usuario');
            _this.props.history.push('/StudentMenu')
            
          }
          else
          {
            //Enviar a administrador
            console.log('admin usuario');
          }
        }
        
        })
        
      })
      .catch(function(error) {
        // Handle error.

        console.log('Error login microsoft')
        console.log(error)
      });
  }

  login = () => {
    console.log(this.state.email  + '  ' + this.state.password)

    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      firebase.database().ref('users/' + response.user.uid).once('value').then(function(snapshot) {
        var rol = (snapshot.val() && snapshot.val().rol) || 'Anonymous';
        console.log(rol)
        if(rol === 'Estudiante')
        {
          //Enviar a pantalla estudiante
        }
        else
        {
          //Enviar a administrador
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
    this.setSmShow(false)
  }
  changeState = (type, val) => {
    this.setState({
      ...this.state,
      [type]: val.target.value
    })
  }

  renderNavbar() {
    return(
      <Navbar className={classes.navbar} collapseOnSelect expand="lg" bg="#E3EAFA">
        <Navbar.Brand>
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="B-Sabana"/>
          <h1 className={classes.titleNav}>B-Sabana</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{position:'absolute',right:'2vw'}}>
            <Nav.Link className={classes.font}>Home</Nav.Link>
            <NavDropdown className={classes.font} title="Objetos perdidos" id="collasible-nav-dropdown">
              <NavDropdown.Item className={classes.font}>Buscar obejtos</NavDropdown.Item>
              <NavDropdown.Item className={classes.font}>¿Encontraste algo?</NavDropdown.Item>
              <NavDropdown.Item className={classes.font}>¿Tenemos algo tuyo?</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={classes.font}>Implementos deportivos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  render() {
    return (
      <Container className={classes.Home}>
        {this.renderNavbar()}
        <div className={classes.plus}>
          <img alt={'plus'} className={classes.addIcon} src={plus}></img>
          <h1 className={classes.register}>Registrar objeto</h1>
        </div>

        <div className={classes.icon}>
          <img alt={'ds'} className={classes.logo} src={logo}></img>
          <h1 className={classes.title}>B-Sabana</h1>
        </div>

        <div className={classes.menu}>
          <div className={classes.order}>
            <div className={`${classes.search}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <h4 className={classes.nameOption}>Buscar deportivos</h4>
            </div>

            <div className={`${classes.found}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <h4 className={classes.nameOption}>¿Encontraste algo?</h4>
            </div>

            <div className={`${classes.weHave}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <h4 className={classes.nameOption}>¿Tenemos algo tuyo?</h4>
            </div>
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

export default InitialMenu;
