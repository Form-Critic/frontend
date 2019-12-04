import React from 'react';
import logo from './logo.svg';
//import {BrowserRouter as Router } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
//components
import Dashboard from './components/dashboard/Dashboard'
import StartForm from './components/login/StartForm'
import NewSiginin from './components/login/NewSignIn'
import NavBar from './components/navbar/NavBar'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        {/* <Link path='/register' component={Register}>Register
        </Link> */}
        <Route path='/register' component={NewSiginin} props={props}/>
        <PrivateRoute path='/dash' component={Dashboard} props={props}/>
      </Router>

     
    </div>
  );
}

export default App;
