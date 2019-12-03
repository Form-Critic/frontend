import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: '2%',
      display:'flex',
      justifyContent:'space-evenly'
    },
    icon: {
        fontSize: '9rem',
      },
  }));

const Actions = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <AddIcon className={classes.icon}/> 
           <MessageIcon className={classes.icon}/>
           <FitnessCenterIcon className={classes.icon}/>
        </div>
    );
};

export default Actions;