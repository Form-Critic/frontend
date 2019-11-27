import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Form from './StartForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const Register = () => {
    return (
        <>
            <TextField  variant="outlined" required placeholder='name' label='name' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" required placeholder='email' label='email' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" required placeholder='username' label='username' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" required placeholder='password' label='password' autoFocus margin='normal'></TextField>
            <Button type='submit' fullWidth variant='contained'>Sign Up</Button>
        </>
    );
};

export default Register;