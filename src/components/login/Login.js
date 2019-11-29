import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const Login = () => {
    const [credentials, setCredentials] = useState({})
    const changeHandler = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(e.target.name,e.target.value)
    }

    return (
        <>
            <TextField  variant="outlined" onChange={changeHandler} name='username' required placeholder='username' label='username' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" onChange={changeHandler} name='password' required placeholder='password' label='password' autoFocus margin='normal'></TextField>
            <Button type='submit' fullWidth variant='contained'>Sign In</Button>
        </>
    );
};

export default Login;