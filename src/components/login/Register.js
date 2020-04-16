import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useForm from '../postForm/useForm'
import { useSelector, useDispatch} from 'react-redux'
import { postRegisterUser } from '../../actions/index'
import validate from '../postForm/postValidator'


const Register = (props) => {
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state)
    const [credentials, setCredentials] = useState({})
    
    const handleRegister = ()=>{
        dispatch(postRegisterUser({credentials,props}))
    }
    
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(handleRegister, validate, "register");

    return (
        <>
            <TextField fullWidth  value={values.name} variant="outlined" name='name' onChange={handleChange} required placeholder='name' label='name' autoFocus margin='normal'></TextField>
            {errors.name && (<Typography color='error' className="help is-danger error-text">{errors.name}</Typography>)}
            <TextField fullWidth  value={values.email} variant="outlined" name='email' onChange={handleChange} required placeholder='email' label='email'  margin='normal'></TextField>
            {errors.email && (<Typography color='error' className="help is-danger error-text">{errors.email}</Typography>)}
            <TextField fullWidth  value={values.username} variant="outlined" name='username' onChange={handleChange} required placeholder='username' label='username'  margin='normal'></TextField>
            {errors.username && (<Typography color='error' className="help is-danger error-text">{errors.username}</Typography>)}
            <TextField fullWidth  value={values.password} variant="outlined" name='password' onChange={handleChange} required placeholder='password' label='password' type='password' margin='normal'></TextField>
            {errors.password && (<Typography color='error' className="help is-danger error-text">{errors.password}</Typography>)}
            <Button 
            onClick={(e)=>handleSubmit(e)} 
            type="submit"
            style={{margin: '6% auto 2% auto'}}
            fullWidth
            variant="contained"
            color="primary"
            // style={}
            >register</Button>
        </>
    );
};

export default Register;