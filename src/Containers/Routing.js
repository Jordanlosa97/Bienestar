import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home/Home.js';
import InitialMenu from './InitialPage/initialMenu.js';
import LostObjects from './LostObjects/LostObjects.js';
import Navbar from './Navbar/Navbar.js';

export default class Routing extends Component {      
  
  render(){
    return (
      <BrowserRouter> 
          <Route exact path="/" render ={props => (
              <Home {...props}/>
          )}/>  
          <Route exact path="/Home" render ={props => (
              <Home {...props}/>
          )}/>  
          <Route exact path="/" render ={props => (
              <Home {...props}/>
          )}/> 
          <Route exact path="/StudentMenu" render ={props => (
              <InitialMenu {...props}/>
          )}/>     
          <Route exact path="/ObjetosPerdidos" render ={props => (
              <LostObjects {...props}/>
          )}/>     
          <Route exact path="/NavBar_ThisPageisNotAcceded" render ={props => (
              <Navbar {...props}/>
          )}/>     
      </BrowserRouter>    
    );
  }
}
