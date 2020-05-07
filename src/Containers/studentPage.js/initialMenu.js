import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './initialMenu.css';
import * as firebaseAuth from 'firebase/app';
import logo from '../../images/ic_logo-web.png'
import objectlost from '../../images/objectLost.jpeg';
import sportEquipment from '../../images/sportEquipment.jpg'
import {Col, Row, Container} from 'react-bootstrap'



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

  render() {
  return (
    <Container className="Home">
      <div className="icon">
        <img alt={'ds'} className="logo" src={logo}></img>
        <h1 className="title">B-Sabana</h1>
      </div>
      <Row className="menu">
          <Col md={{ span: 6, offset: 3 }} xs={12} className="centerdiv">
            <Row className="titlemenu">
              <h3 className="texttitle">{'¿Qué quieres consultar?'}</h3>
            </Row>
            <Row className="listOption">
              <Col md={6} xs={12} className="OptionCol">
                <div className="Option">
                  <img alt={'ds'} className="imageOption" src={objectlost}></img>
                  <h4 className="nameOption">Implementos deportivos</h4>
                </div>
              </Col>
              <Col md={6} xs={12} className="OptionCol">
                <div className="Option">
                  <img alt={'ds'} className="imageOption" src={sportEquipment}></img>
                  <h4 className="nameOption">{firebaseAuth.auth().currentUser.displayName}</h4>
                </div>
              </Col>
            </Row>
          </Col>
      </Row>
      
      <div className="cloud">
        <div className="bola bola1"></div>
        <div className="bola bola2"></div>
        <div className="bola bola3"></div>
        <div className="bola bola4"></div>
      </div>
    </Container>
  );
  }
}

export default InitialMenu;
