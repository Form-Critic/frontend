import React, { useState, useEffect } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ButtonM from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux'
import { postComment, getCurrentUser } from '../../actions/index'
import { useHistory  } from 'react-router-dom'
//component
import CommentComp from './CommentComp'

const Comments = ({ comments, props }) => {
    const dispatch = useDispatch()
    const currentState = useSelector(state => state)
    const history = useHistory()

    const [newComment, setNewComment] = useState({ comment: '' })
    const changeHandler = (e) => {
        setNewComment({ [e.target.name]: e.target.value })
    }

    useEffect(() => {
        //grabs info of the user that is logged in!
        if (currentState.isLoggedIn) { dispatch(getCurrentUser()) }
    }, [])

    const getStarted = (register) =>{
        history.push('/register', {'register': register})
    }
    return (
        <Comment.Group style={{ width: '90%', display: 'flex', flexDirection: 'column', margin: '2% auto' }}>
            <Header as='h3' dividing>
                Comments
        </Header>
            {currentState.isLoggedIn ?
                <Form reply>
                    <Form.TextArea
                        name='comment'
                        value={newComment.comment}
                        onChange={(e) => { changeHandler(e) }}
                        style={{ width: '90%' }}
                    />
                    <Button onClick={(e) => {
                        e.preventDefault()
                        dispatch(postComment({ newComment, id: Number(props.match.params.id) }))
                        setNewComment({ comment: '' })
                    }} content='Post Comment' labelPosition='left' icon='edit' primary />
                </Form>
                :
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ButtonM onClick={()=>getStarted(false)}style={{margin:"0 10px"}}>Login</ButtonM>
                        <ButtonM onClick={()=>getStarted(true)}style={{margin:"0 10px"}}>Sign Up</ButtonM>
                </div>}
            {comments.map(comment => <CommentComp key={comment.id} comment={comment} op={currentState.post.id === comment.user_id} currentUserId={currentState.currentUser.id} />)}
        </Comment.Group>
    )
}

export default Comments
