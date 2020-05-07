import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './Navbar.css';
import firebase from '../../Intances/firebase.js';
import logo from '../../images/ic_logo-web.png'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class navBar extends Component {
  state = {
    rol : 'Estudiante',
    user: ''
  }
  UNSAFE_componentWillMount(){
    console.log('se actualiza')
    const _this = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user.displayName)
        _this.setState({
          user: user
        })
      } else {
        // No user is signed in.
        console.log("user null")
        this.props.history.push("/home")
      }
    });
  }
  LogOut = () => {
    const _this = this;
    firebase.auth().signOut().then(function() {
        console.log("Dirigir a otra pagina")
        _this.props.history.push("/Home")
      }).catch(function(error) {
        // An error happened.
      });
  }
  getUserButton(){
      if(this.state.user !== null)
      {
        return (
            <NavDropdown className={classes.font+' '+classes.UserButton} 
                title={<span className={classes.textName}>{this.state.user.displayName}</span>} 
                id="nameButton"
            >
                <NavDropdown.Item className={classes.font}>Configuracion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className={classes.font} onClick={() => this.LogOut()}>Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          )
      }
      else
      {
          return null
      }
      
  }
  render() {
    return (
        <Navbar className={classes.navbar} collapseOnSelect expand="lg" bg="#E3EAFA">
          <Navbar.Brand className={classes.BrandLogo} onClick={() => {this.props.history.push("/StudentMenu")}}>
            <img src={logo} width="30" height="30"  alt="B-Sabana"/>
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
              {this.getUserButton()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default navBar;
