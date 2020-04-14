import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { logOut } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory  } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
    const currentState = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory ();
    console.log("this is the good history", history)
    const loggedIn = currentState.isLoggedIn


    function getImage(){
        console.log("lets start this!")
        // axios.get('https://img.youtube.com/vi/h44SIMOMdEI/sddefault.jpg')
        axios.get('https://img.youtube.com/vi/vthMCtgVtFw/sddefault.jpg')
        .then(res=>console.log(res))
        .catch(err=>console.log("this is an error", err))
        console.log("this is the image!!! ")
      }
      
    
    
    const onHome = () =>{
        history.push('/home')
    }

    const onLog =()=>{
        if (loggedIn){
            dispatch(logOut())
        }
        history.push('/register', {register:false})
        
    }
    const sign = loggedIn ? "Sign Out" : "Sign Up"
    return (
        <div>
            <AppBar position='static'>
                <Toolbar style={{display: 'flex', justifyContent:"space-between"}}>
                <Typography className="form-critic-title" variant="h6" color="inherit" noWrap>
                    Form Critic
                 </Typography>
                 <div className="nav-link-wrap">
                    <Typography onClick={()=>onHome()} className="nav-link" variant="h6" color="inherit">Home</Typography>
                    <Typography onClick={()=>{getImage()}}className="nav-link" variant="h6" color="inherit">About</Typography>
                    <Typography onClick={()=>onLog()}className="nav-link" variant="h6" color="inherit">{ sign }</Typography>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
