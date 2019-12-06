import React from 'react';
import { Button, Comment, Form } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
// import avatar from '../../static/user.png'
import { useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '2% auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '60%'

    },
})
)


const CommentComp = ({comment}) => {
    console.log('hello!!!', comment)
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