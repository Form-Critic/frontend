import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const Login = () => {
    return (
        <>
            <TextField  variant="outlined" required placeholder='username' label='username' autoFocus margin='normal'></TextField>
            <TextField  variant="outlined" required placeholder='password' label='password' autoFocus margin='normal'></TextField>
            <Button type='submit' fullWidth variant='contained'>Sign In</Button>
        </>
    );
};

export default Login;