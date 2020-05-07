import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.css';
import firebase  from '../../Intances/firebase.js'
import * as firebaseAuth from 'firebase/app';
import logo from '../../images/ic_logo-web.png'



class Home extends Component {
  state={
    smShow:false,
    email: '',
    password: ''
  }
  UNSAFE_componentWillMount(){
    if(firebase.auth().currentUser !== null)
    {
      this.props.history.push("/studentMenu")
    }
    else
    {

    }
  }
  setSmShow = (s) => {
    this.setState({
      smShow: s
    })
  }

  loginMicrosoft = () => {
    const _this = this;
    firebaseAuth.auth().setPersistence(firebaseAuth.auth.Auth.Persistence.LOCAL)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      console.log("Logeando con microsoft")
      var provider = new firebaseAuth.auth.OAuthProvider('microsoft.com');
      provider.setCustomParameters({
        // Force re-consent.
        // Target specific email with login hint.
        login_hint: 'user@unisabana.edu.co'
      });
      return firebase.auth().signInWithPopup(provider)
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
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error in setPersistence code: " + errorCode + 
      " error message  " + errorMessage)
    });
    
    
    
  }

  login = () => {
    console.log(this.state.email  + '  ' + this.state.password)
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
    <div className={classes.Home}>
      <div className={classes.icon}>
        <img alt={'ds'} className={classes.logo} src={logo}></img>
        <h1 className={classes.title}>B-Sabana</h1>
      </div>
      <div className={classes.button}
        onClick={() => this.loginMicrosoft()}>
          <h1 className={classes.buttonTitle}>Ingresar</h1>
      </div>
      <div className={classes.cloud}>
        <div className={`${classes.bola}  ${classes.bola1}`}></div>
        <div className={`${classes.bola}  ${classes.bola2}`}></div>
        <div className={`${classes.bola}  ${classes.bola3}`}></div>
        <div className={`${classes.bola}  ${classes.bola4}`}></div>
      </div>
    </div>
  );
  }
}

export default Home;
