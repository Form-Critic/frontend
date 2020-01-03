import React,{ useState, useEffect } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useSelector, useDispatch} from 'react-redux'
import { postComment, getCurrentUser } from '../../actions/index'
//component
import CommentComp from './CommentComp'

const Comments = ({ comments, props}) => {
    const dispatch = useDispatch()
    const currentState = useSelector(state=>state)

    const [newComment, setNewComment] = useState({comment:''})
    const changeHandler = (e)=>{
        setNewComment({[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        //grabs info of the user that is logged in!
        dispatch(getCurrentUser())
    },[])

    return (
    <Comment.Group style={{width:'90%', display:'flex', flexDirection:'column', margin:'2% auto'}}>
         <Header as='h3' dividing>
            Comments
        </Header>
        <Form reply>
            <Form.TextArea 
            name='comment'
            value={newComment.comment}
            onChange={(e)=>{changeHandler(e)}}
            style={{minWidth:'80%'}}
            />
            <Button onClick={(e)=>{
                e.preventDefault()
                dispatch(postComment({newComment, id:Number(props.match.params.id)}))
                setNewComment({comment:''})
            }} content='Post Comment' labelPosition='left' icon='edit' primary />
        </Form>
        {comments.map(comment => <CommentComp key={comment.id} comment={comment} op={currentState.post.id===comment.user_id} currentUserId={currentState.currentUser.id}/>)}
    </Comment.Group>
    )
}

export default Comments
