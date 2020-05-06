import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './initialMenu.css';
import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'
import objectlost from '../../images/objectLost.jpeg';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

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
          _this.props.history.push('/StudentMenu')
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

  render() {
  return (
    <Container className={classes.Home}>
      <div className={classes.icon}>
        <img alt={'ds'} className={classes.logo} src={logo}></img>
        <h1 className={classes.title}>B-Sabana</h1>
      </div>

      <div className={classes.menu}>
        <div className={classes.titlemenu}>
          <h3 className={classes.texttitle}>{'¿Qué deseas consultar?'}</h3>
        </div>

        <div className={`${classes.sports}  ${classes.Option}`}>
          <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
          <h4 className={classes.nameOption}>Implementos deportivos</h4>
        </div>

        <Link to="/ObjetosPerdidos" className={`${classes.lost}  ${classes.Option}`} 
              style={{textDecoration:'none'}}>
          <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
          <h4 className={classes.nameOption}>Objetos perdidos</h4>
        </Link>
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
