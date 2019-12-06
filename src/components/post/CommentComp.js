import React, {useEffect} from 'react';

import {Comment,  CommentAction } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrentUser, deleteComment } from '../../actions/index'


const CommentComp = ({comment}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.currentUser)
  useEffect(()=>{
        dispatch(getCurrentUser())
    },[])

  const deleteThisComment = (id)=>{
    dispatch(deleteComment(id))
  }

    return (
        <Comment>
        <Comment.Avatar as='a' src={comment.avatar} />
        {/* <Avatar>{comment.username.split('')[0]}</Avatar> */}
        <Comment.Content>
          <Comment.Author style={{textAlign:'left'}}>{comment.username}</Comment.Author>
          {/* <Typography variant='caption'>{comment.username}</Typography> */}
          {/* <Comment.Metadata >
            {comment.date}
          </Comment.Metadata> */}
          {currentUser.id===comment.user_id?<CommentAction onClick={(e)=>{
            e.preventDefault()
            deleteThisComment(comment.id)
          }} style={{color:'red', cursor:'pointer'}}>delete</CommentAction>:null}
          <Comment.Text>
            <p style={{textAlign:'left'}}>{comment.comment}</p>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
};

export default CommentComp;