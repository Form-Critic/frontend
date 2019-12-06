import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import CommentComp from './CommentComp'

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

const Comments = ({ comments }) => {
    console.log(comments)
    return (
    <Comment.Group>
         <Header as='h3' dividing>
            Comments
        </Header>
        {comments.map(comment => <CommentComp comment={comment} />)}
        <Form reply>
            <Form.TextArea />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
    </Comment.Group>
    )
}


export default Comments
