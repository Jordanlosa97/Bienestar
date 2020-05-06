import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './initialMenu.css';
//import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'
import objectlost from '../../images/objectLost.jpeg';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class InitialMenu extends Component {
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
