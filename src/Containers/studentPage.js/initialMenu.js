import React,{useState, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Nav,NavDropdown, Button, Modal, Form} from 'react-bootstrap';
import './Home.css';
import Firebase from '../../Intances/firebase.js'




class initialMenu extends Component {
  
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
  login = () => {
    console.log(this.state.email  + '  ' + this.state.password)
    /* 
    ---Create new user---
    Firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      Firebase.database().ref('users/' + response.user.uid).set({
        rol: 'Estudiante'
      })
    })
    .catch((error) => {
      console.log(error)
    })
    */
   Firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      Firebase.database().ref('users/' + response.user.uid).once('value').then(function(snapshot) {
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
  <Navbar bg="light" expand="lg">
    <Navbar.Brand  color="blue" href="#home">B-Sabana</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link  color="red" href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link className="mr-sm-2">Home</Nav.Link>
      <Button variant="primary" onClick={() => this.setSmShow(true)}>Ingresar</Button>{' '}
      </Navbar.Collapse>
      
  </Navbar>
  
  );
  }
}

export default initialMenu;