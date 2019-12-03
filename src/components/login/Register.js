import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Form from './StartForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch} from 'react-redux'
import { postRegisterUser } from '../../actions/index'


const Register = (props) => {
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state)
    const [credentials, setCredentials] = useState({})

    const changeHandler = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <>
            <TextField  variant="outlined" name='name' onChange={changeHandler} required placeholder='name' label='name' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" name='email' onChange={changeHandler} required placeholder='email' label='email'  margin='normal'></TextField>
            <TextField  variant="outlined" name='username' onChange={changeHandler} required placeholder='username' label='username'  margin='normal'></TextField>
            <TextField  variant="outlined" name='password' onChange={changeHandler} required placeholder='password' label='password'  margin='normal'></TextField>
            <Button type='submit' onClick={()=>{dispatch(postRegisterUser({credentials,props}))}} fullWidth variant='contained'>Sign Up</Button>
        </>
    );
};

export default Register;