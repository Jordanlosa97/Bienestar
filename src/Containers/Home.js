import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../images/ic_logo-web.png'

function Home() {
  return (
    <div className="Home">
      <div className="icon">
        <img className="logo" src={logo}></img>
        <h1 className="title">B-Sabana</h1>
      </div>
      <div className="button">
        <h3 className="buttonTitle">Iniciar sesión</h3>
      </div>
      <div className="cloud">
        <div className="bola bola1"></div>
        <div className="bola bola2"></div>
        <div className="bola bola3"></div>
        <div className="bola bola4"></div>
      </div>
    </div>
  );
}

export default Home;