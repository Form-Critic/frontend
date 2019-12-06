import React,{ useState } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useSelector, useDispatch} from 'react-redux'
import { postComment } from '../../actions/index'
//component
import CommentComp from './CommentComp'

const Comments = ({ comments, props }) => {
    console.log(props.match.params.id)
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state)
    console.log(currentState)

    const [newComment, setNewComment] = useState({comment:''})
    const changeHandler = (e)=>{
        setNewComment({[e.target.name]:e.target.value})
    }

    console.log(comments)
    return (
    <Comment.Group>
         <Header as='h3' dividing>
            Comments
        </Header>
        {comments.map(comment => <CommentComp comment={comment} />)}
        <Form reply>
            <Form.TextArea 
            name='comment'
            value={newComment.comment}
            onChange={(e)=>{changeHandler(e)}}
            />
            <Button onClick={(e)=>{
                e.preventDefault()
                dispatch(postComment({newComment, id:Number(props.match.params.id)}))
                setNewComment({comment:''})
            }} content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
    </Comment.Group>
    )
}


export default Comments
