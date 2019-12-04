import React from 'react';
import logo from './logo.svg';
//import {BrowserRouter as Router } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
//components
import Dashboard from './components/dashboard/Dashboard'
import NewDash from './components/dashboard/NewDash'
import NewSiginIn from './components/login/NewSignIn'
import Post from './components/post/Post'
import NavBar from './components/navbar/NavBar'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        {/* <Link path='/register' component={Register}>Register
        </Link> */}
        <Route path='/register' component={NewSiginIn} props={props}/>
        <PrivateRoute path='/home' component={NewDash} props={props}/>
        <PrivateRoute path='/post/:id' component={Post} props={props}/>

      </Router>

     
    </div>
  );
}

export default App;
