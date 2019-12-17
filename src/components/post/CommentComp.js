import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Comment,  CommentAction } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import { deleteComment } from '../../actions/index'


const CommentComp = ({comment, currentUserId}) => {
  
  const dispatch = useDispatch()

  const deleteThisComment = (id)=>{
    dispatch(deleteComment(id))
  }

    return (
        <Comment>
        <Comment.Avatar as='a' src={comment.avatar} />
        {/* <Avatar>{comment.username.split('')[0]}</Avatar> */}
        <Comment.Content>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Comment.Author style={{textAlign:'left'}}>{comment.username}</Comment.Author>
            {/* <Typography variant='caption'>{comment.username}</Typography> */}
            <Comment.Metadata style={{color:'black'}}>
              {new Date(comment.date).toLocaleString()}
            </Comment.Metadata>
          </div>
          <div style={{ textAlign:'right'}}>
            {currentUserId===comment.user_id?<DeleteForeverIcon onClick={(e)=>{
                e.preventDefault()
                deleteThisComment(comment.id)
              }} style={{color:'red', cursor:'pointer', textAlign:'right'}}>delete</DeleteForeverIcon>:null}
          </div>
          <Comment.Text>
            <p style={{textAlign:'left'}}>{comment.comment}</p>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
};

export default CommentComp;