import React, { useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import * as firebase from "firebase/app";
import Logo from "../src/LOGO.svg"
import "firebase/auth";

// Pages
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

// Styles
import "./App.css"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyDSa74hF6SGlZt1jpceWIK52YNkA8fPUfA",
    authDomain: "final-project-5c6f6.firebaseapp.com",
    databaseURL: "https://final-project-5c6f6.firebaseio.com",
    projectId: "final-project-5c6f6",
    storageBucket: "final-project-5c6f6.appspot.com",
    messagingSenderId: "614360552361",
    appId: "1:614360552361:web:b8a7b6fac1b996f1beaab8"
  };

  // Ensure app is initialized when it is ready to be
  // Ensure app is not initialized more than once

  useEffect(() => {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth().
      setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(e){
        console.log('AUTH ERROR', e);
      })
  },[firebaseConfig]);

  // Check to see if user is logged in
  // User loads page, check their status, set stage accordingly
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user){
      if(user){
        setUserInformation(user);
        setLoggedIn(true);
      }else{
        setUserInformation({});
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  // Login
  function LoginFunction(e){
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
  

  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function(error){
        console.log("LOGIN ERROR", e);
      })
  }
  // Logout
  function LogoutFunction(){
    firebase
      .auth()
      .signOut()
      .then(function(){
        setLoggedIn(false);
      })
      .catch(function(error){
        console.log("LOGOUT ERROR", error);
      })
  }

  // Create Account
  function CreateAccountFunction(e){
    e.preventDefault();
    console.log(`form payload`, e);
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    console.log('email', email);


    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        console.log("VALID ACCOUNT CREATE", response);
        setLoggedIn(true);
      })
      .catch(function(e){
        console.log('what');
        console.log("CREATE ACCOUNT ERROR", e);
      })
  }

  if (loading) return null;


  return (
    <div className="App">
      <Router>
        <div className = "container">
          <img className = "Logo" src={Logo}/>
          <h1>Give your two cents to the conversation</h1>
          <Route exact path = "/">
            {!loggedIn ? (<Login LoginFunction = {LoginFunction} />) : (<Home userInformation = {userInformation}/>)}
            <Home />
          </Route>
          <Route exact path = "/login">
            {!loggedIn ? (<Login LoginFunction = {LoginFunction} />) : (<Redirect to = "/"/>)}
          </Route>
          <Route exact path = "/create-account">
            {!loggedIn ?(<CreateAccount CreateAccountFunction = {CreateAccountFunction}/>) : (<Redirect to = "/"/>)}
          </Route>
          <Header LogoutFunction ={LogoutFunction} isLoggedIn = {loggedIn}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
