import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
// import avatar from '../../static/user.png'


const CommentComp = ({comment}) => {
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
          <Comment.Text>
            <p style={{textAlign:'left'}}>{comment.comment}</p>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
};

export default CommentComp;