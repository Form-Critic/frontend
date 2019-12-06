import React, {useEffect} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import {useDispatch, useSelector} from 'react-redux'
import { getPost, getComments } from '../../actions/index'
import Comments from './Comments'

const useStyles = makeStyles(theme=>({
    root:{
        margin: '5% auto',
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
})
)

const Post = (props) => {
  const classes = useStyles();  
  const dispatch = useDispatch()
  const currentState = useSelector(state=>state)
  console.log(currentState.post.video_link)
  useEffect(()=>{
        dispatch(getPost(props.match))
        dispatch(getComments(props.match))
    },[])
    console.log(currentState.post.video_link===undefined)
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
            allowfullscreen
            frameborder="0"
            >
            </iframe>
            <div className={classes.root}>
                <Comments comments={currentState.post.comments}></Comments>
            </div>
        </div>
    );
};

export default Post;
//<iframe width="560" height="315" src="//www.youtube.com/embed/SHgQeBk7zIs" frameborder="0" allowfullscreen></iframe>