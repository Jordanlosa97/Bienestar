import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home/Home.js';
import InitialMenu from './studentPage.js/initialMenu.js';

export default class Routing extends Component {      
  
  render(){
    return (
      <BrowserRouter> 
          <Route exact path="/Home" render ={props => (
              <Home {...props}/>
          )}/>  
          <Route exact path="/StudentMenu" render ={props => (
              <InitialMenu {...props}/>
          )}/>             
      </BrowserRouter>    
    );
  }
}
