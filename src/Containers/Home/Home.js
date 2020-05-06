import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import firebase,{provider} from '../../Intances/firebase.js'
import logo from '../../images/ic_logo-web.png'



class Home extends Component {
  
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

  loginMicrosoft = () => {
    console.log("Logeando con microsoft")
    provider.setCustomParameters({
      // Force re-consent.
      prompt: 'consent',
      // Target specific email with login hint.
      login_hint: 'student@unisabana.edu.co'
    });
    const _this = this;
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result.user)
        firebase.database().ref('users/' + result.user.uid).once('value').then(function(snapshot) {
        var rol = (snapshot.val() && snapshot.val().rol) || 'Anonymous';
        if(rol === 'Anonymous')
        {
          console.log('Nuevo usuario');
          firebase.database().ref('users/' + result.user.uid).set({
          rol: 'Estudiante'
            })
          _this.props.history.push('/StudentMenu')
        }
        else
        {
          if(rol === 'Estudiante')
          {
            //Enviar a pantalla estudiante
            console.log('estudiante usuario');
            _this.props.history.push('/StudentMenu')
          }
          else
          {
            //Enviar a administrador
            console.log('admin usuario');
          }
        }
        
        })
        
      })
      .catch(function(error) {
        // Handle error.

        console.log('Error login microsoft')
        console.log(error)
      });
  }

  login = () => {
    console.log(this.state.email  + '  ' + this.state.password)
    /* 
    ---Create new user---
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      firebase.database().ref('users/' + response.user.uid).set({
        rol: 'Estudiante'
      })
    })
    .catch((error) => {
      console.log(error)
    })
    */
   firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response)
      firebase.database().ref('users/' + response.user.uid).once('value').then(function(snapshot) {
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
    <div className="Home">
      <div className="icon">
        <img alt={'ds'} className="logo" src={logo}></img>
        <h1 className="title">B-Sabana</h1>
      </div>
      <div className="button"
        onClick={() => this.loginMicrosoft()}>
          <h1 className="buttonTitle">Ingresar</h1>
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
}

export default Home;
