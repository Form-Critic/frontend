import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Switch from '@material-ui/core/Switch';

import { useSelector, useDispatch} from 'react-redux'

import Login from './Login'
import Register from './Register'

const useStyles = makeStyles({
  root: {
    width: 350,
    padding: 25,
    margin: 35,
  },
});

export default function ClassesNesting(props) {

  const dispatch = useDispatch()
  const currentState = useSelector(state=>state)
  const classes = useStyles();
  const [register, setRegister] = useState(true) // toggles the switch to change from register and login

  console.log(dispatch, currentState)
  return (
    <FormControl
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      <Typography variant='h4'>Welcome</Typography>
        {register?<Register props={props}/>:<Login props={props}/>}
        <Box display='flex' justifyContent='space-between' alignContent='center' alignItems='center' margin='20px'>   
            <Typography color='primary'>Already Have an Account?</Typography>
            <Switch
        value="checkedA"
        color="primary"
        onChange={e=>{setRegister(!register)}}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />    
        </Box>
    </FormControl>
  );
}