import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getPosts } from '../../actions/index'
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: '2%',
      display:'flex',
      wrap:'wrap'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
      },
  }));


const PostGrid = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state.posts)

    useEffect(()=>{
        dispatch(getPosts())
    },[])
    console.log(currentState)
    return (
        <Grid container spacing={20}>
            {currentState.length?currentState.map(post=> <Post post={post} props={props}/>):<></>}
        </Grid>
    );
};

export default PostGrid;