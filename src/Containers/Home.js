import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="../logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <text className="TitleNav">
            Bienestar Universitario
          </text>
          
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Home;
