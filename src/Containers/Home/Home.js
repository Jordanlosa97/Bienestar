import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form} from 'react-bootstrap';
import './Home.css';
import {Link} from 'react-router-dom';
import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'



class Home extends Component {
  
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
    /* 
    ---Create new user---
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      firebase.database().ref('users/' + response.user.uid).set({
        rol: 'Estudiante'
      })
    })
    .catch((error) => {
      console.log(error)
    })
    */
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
    <div className="Home">
      <div className="icon">
        <img alt={'ds'} className="logo" src={logo}></img>
        <h1 className="title">B-Sabana</h1>
      </div>
      <div className="button"
        onClick={() => this.loginMicrosoft()}>
          <h1 className="buttonTitle">Ingresar</h1>
      </div>
      <div className="cloud">
        <div className="bola bola1"></div>
        <div className="bola bola2"></div>
        <div className="bola bola3"></div>
        <div className="bola bola4"></div>
      </div>
      <Modal
        size="sm"
        show={this.state.smShow}
        onHide={() => this.setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ingresar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={this.state.email} 
                onChange={(t) => this.changeState('email',t)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                value={this.state.password} 
                onChange={(t) => this.changeState('password',t)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={() => this.login()}>
              Ingresar
            </Button>
            <Button variant="primary" onClick={() => this.loginMicrosoft()}>
              Microsoft
            </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
  }
}

export default Home;
