import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useForm from '../../utils/form-validation/useForm'
import validate from '../../utils/form-validation/postValidator'


import { useDispatch } from 'react-redux'
import { postLoginUser } from '../../actions/index'

const Login = (props) => {
    const dispatch = useDispatch()

    const handleLogin = () =>{
        dispatch(postLoginUser({values, ...props}))
    }
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(handleLogin, validate, "login");
 

    return (
        <>
            <TextField fullWidth value={values.username} variant="outlined" onChange={handleChange} name='username' required placeholder='username' label='username' autoFocus margin='normal'></TextField>
            {errors.username && (<Typography color='error' className="help is-danger error-text">{errors.username}</Typography>)}            
            <TextField fullWidth value={values.password} variant="outlined" onChange={handleChange} name='password' required placeholder='password' label='password' type='password'  margin='normal'></TextField>
            {errors.password && (<Typography color='error' className="help is-danger error-text">{errors.password}</Typography>)}            
            <Button 
            onClick={(e)=>{
                handleSubmit(e)
            }} 
            type="submit"
            fullWidth
            style={{margin: '6% auto 2% auto'}}
            variant="contained"
            color="primary"
            >Sign In</Button>
        </>
    );
};

export default Login;