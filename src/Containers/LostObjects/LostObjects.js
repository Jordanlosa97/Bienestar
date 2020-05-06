import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './LostObjects.css';
//import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'
import plus from '../../images/plusIcon.png'
import objectlost from '../../images/objectLost.jpeg';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import axios from 'axios'

class LostObjects extends Component {
  state = {
    rol : 'Administrador'
  }

  renderAddIcon() {
    if(this.state.rol === 'Estudiante'){
      return(<div></div>)
    }
    if(this.state.rol === 'Administrador'){
      return(
        <div className={classes.plus}>
          <img alt={'plus'} className={classes.addIcon} src={plus}></img>
          <h1 className={classes.register}>Registrar objeto</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <Container className={classes.Home}>
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

        {this.renderAddIcon()}
      </Container>
    );
  }
}

export default LostObjects;
