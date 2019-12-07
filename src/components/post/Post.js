import React, {useEffect} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { getPost, getComments, getCurrentUser } from '../../actions/index'
import Comments from './Comments'

const useStyles = makeStyles(theme=>({
    root:{
        margin: '5% auto',
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        width: '100%'
    },
    comment:{
        display:'none',
        color:'red'
    }
})
)

//things that still need to be worked on --> 1. UX, needs lots of styling. 2. Integrate replies 3. Fix the dates. 4. Make user clickable 5. Add make sure to delete comments


const Post = (props) => {
  const classes = useStyles();  
  const dispatch = useDispatch()
  const currentState = useSelector(state=>state)
  useEffect(()=>{
        dispatch(getPost(props.match))
        dispatch(getComments(props.match))
    },[])
    const embedLink = !(currentState.post.video_link===undefined)?'//www.youtube.com/embed/'+currentState.post.video_link.split('=')[1]:"";
    const x = new Date() 

    
    return(currentState.post.comments===undefined)?<h1>Loading</h1>:(
        <div>
            {console.log(x)}
            <iframe
            title='video'
            width="560"
            height="315"
            src={embedLink}
            allowFullScreen
            frameBorder="0"
            >
            </iframe>
            <div className={classes.root}>
                <Comments className={classes.comment} comments={currentState.post.comments} props={props}></Comments>
            </div>
        </div>
    );
};

export default Post;
//<iframe width="560" height="315" src="//www.youtube.com/embed/SHgQeBk7zIs" frameborder="0" allowfullscreen></iframe>