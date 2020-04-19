import React, { useState } from 'react';
import CardActions from '@material-ui/core/CardActions'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../actions/index'

const DeletePostSelect = (props) => {

    const { userId, currentUserId, postId } = props
    const [confirmDelete, setConfirmDelete] = useState({ edit: false, id: -1 })
    const dispatch = useDispatch()

    const deleteHandle = (postId) => {
        !(postId === confirmDelete.id) ? setConfirmDelete({ edit: true, id: postId }) : setConfirmDelete({ edit: !confirmDelete.edit, id: postId })
    }

    function deleteHandler(id){
        dispatch(deletePost(id))
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignContent:'center', alignItems:'center'}}>
            <Link href={`/post/${postId}`}>
                <Button size="small" color="primary">
                    View
            </Button>
            </Link>

            {currentUserId === userId ?
                <>
                    <Button style={postId === confirmDelete.id ? { display: 'none' } : null}
                        onClick={() => deleteHandle(postId)} size="small" color="secondary">
                        Delete
              </Button>
                </>
                : <></>}
            {confirmDelete.edit && postId === confirmDelete.id ?
                <>
                    <Button disabled style={{ color: 'red' }}>Confirm Delete</Button>
                    <Button onClick={(e)=>deleteHandler(postId)}>Yes</Button>
                    <Button onClick={() => setConfirmDelete({ edit: false })}>No</Button>
                </>
                : <></>}
    
        </div>

    )
}

export default DeletePostSelect;