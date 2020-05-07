import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './LostObjects.css';
import logo from '../../images/ic_logo-web.png'
import plus from '../../images/plusIcon.png'
import objectlost from '../../images/objectLost.jpeg';
import {Container} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar.js';

class LostObjects extends Component {
  state = {
    rol : 'Estudiante',
    user: ''
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
        <Navbar history = {this.props.history} />

        <div className={classes.icon}>
          <img alt={'ds'} className={classes.logo} src={logo}></img>
          <h1 className={classes.title}>B-Sabana</h1>
        </div>

        <div className={classes.menu}>
          <div className={classes.order}>
            <div className={`${classes.search}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <div className={classes.bName}>
                <h4 className={classes.nameOption}>Buscar deportivos</h4>
              </div>
            </div>

            <div className={`${classes.found}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <div className={classes.bName}>
                <h4 className={classes.nameOption}>¿Encontraste algo?</h4>
              </div>
            </div>

            <div className={`${classes.weHave}  ${classes.Option}`}>
              <img alt={'ds'} className={classes.imageOption} src={objectlost}></img>
              <div className={classes.bName}>  
                <h4 className={`${classes.page}  ${classes.nameOption}`}>¿Tenemos algo tuyo?</h4>
                <h4 className={`${classes.up}  ${classes.nameOption}`}>¿Tenemos algo</h4>
                <h4 className={`${classes.down}  ${classes.nameOption}`}>tuyo?</h4>
              </div>
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
