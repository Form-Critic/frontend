import React, {useEffect} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import {useDispatch, useSelector} from 'react-redux'

import { getPost, getComments } from '../../actions/index'

const Post = (props) => {
  const dispatch = useDispatch()
  const currentState = useSelector(state=>state)
  console.log(currentState.post.video_link)
  useEffect(()=>{
        dispatch(getPost(props.match))
        dispatch(getComments(props.match))
    },[])
    console.log(currentState.post.video_link===undefined)
    const embedLink = !(currentState.post.video_link===undefined)?'//www.youtube.com/embed/'+currentState.post.video_link.split('=')[1]:"";
    
    
    return(currentState.post.comments===undefined)?<h1>Loading</h1>:(
        <div>
            <iframe
            title='video'
            width="560"
            height="315"
            src={embedLink}
            allowfullscreen
            frameborder="0"
            >
            </iframe>
            {currentState.post.comments.map(comment=>{
               return <div>
                        <p>{comment.comment}</p>
                        <p>{comment.date}</p>
                        <p>{comment.name}</p>
                    </div>
            })}
        </div>
    );
};

export default Post;
//<iframe width="560" height="315" src="//www.youtube.com/embed/SHgQeBk7zIs" frameborder="0" allowfullscreen></iframe>