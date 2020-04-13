import React from 'react';
import logo from './logo.svg';
//import {BrowserRouter as Router } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
//components
import NewDash from './components/dashboard/NewDash'
import NewSiginIn from './components/login/NewSignIn'
import Post from './components/post/Post'
import PostForm from './components/postForm/PostForm'
import EditPost from './components/editPage/EditPost'
import NavBar from './components/navbar/NavBar'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        {/* <Link path='/register' component={Register}>Register
        </Link> */}
        <Route render={() => <Redirect to={{pathname: "/home"}} />} />
        <Route path='/register' component={NewSiginIn} props={props}/>
        <PrivateRoute path='/home' component={NewDash} props={props}/>
        <PrivateRoute exact path='/post/:id' component={Post} props={props}/>
        <PrivateRoute path='/NewPost' component={PostForm} props={props}/>
        <PrivateRoute exact path='/post/:id/edit' component={EditPost} props={props}/>


      </Router>

     
    </div>
  );
}

export default App;
