import * as firebase from 'firebase/app';
import 'firebase/firebase-app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-database";
var firebaseConfig = {
    apiKey: "AIzaSyBRL7Rz_clbVUliGgmhE-QAsF0Z9seCUL0",
    authDomain: "proyectobienestar-e39bb.firebaseapp.com",
    databaseURL: "https://proyectobienestar-e39bb.firebaseio.com",
    projectId: "proyectobienestar-e39bb",
    storageBucket: "proyectobienestar-e39bb.appspot.com",
    messagingSenderId: "1073706496802",
    appId: "1:1073706496802:web:22b64cd4e1011d391c2b7b",
    measurementId: "G-Y1L7L7VB2V"
  };
  // Initialize Firebase

  var Firebase = firebase.initializeApp(firebaseConfig);
  export var provider = new firebase.auth.OAuthProvider('microsoft.com');
  export default Firebase
  
  