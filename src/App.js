import React from 'react';
import logo from './logo.svg';
//import {BrowserRouter as Router } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Register from './components/login/StartForm'
import NavBar from './components/navbar/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        {/* <Link path='/register' component={Register}>Register
        </Link> */}
        <Route path='/register' component={Register}/>
      </Router>

     
    </div>
  );
}

export default App;
