import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch} from 'react-redux'
import { postLoginUser } from '../../actions/index'

const Login = () => {
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state)
    const [credentials, setCredentials] = useState({})

    const changeHandler = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(e.target.name,e.target.value)
    }

    return (
        <>
            <TextField  variant="outlined" onChange={changeHandler} name='username' required placeholder='username' label='username' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" onChange={changeHandler} name='password' required placeholder='password' label='password'  margin='normal'></TextField>
            <Button type='submit' onClick={()=>{dispatch(postLoginUser(credentials))}} fullWidth variant='contained'>Sign In</Button>
        </>
    );
};

export default Login;