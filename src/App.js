import React from 'react';
import logo from './logo.svg';
//import {BrowserRouter as Router } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
//components
import PostGrid from './components/dashboard/PostGrid'
import StartForm from './components/login/StartForm'
import NavBar from './components/navbar/NavBar'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        {/* <Link path='/register' component={Register}>Register
        </Link> */}
        <Route path='/register' component={StartForm} props={props}/>
        <PrivateRoute path='/dash' component={PostGrid} props={props}/>
      </Router>

     
    </div>
  );
}

export default App;
