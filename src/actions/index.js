import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

// CRUD for POSTS

export const CREATE_POST_START = 'CREATE_POST_START'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL'

export const UPDATE_POST_START = 'UPDATE_POST_START'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAIL = 'UPDATE_POST_FAIL'

export const DELETE_POST_START = 'DELETE_POST_START'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL'

export const GET_POSTS_START = 'GET_POSTS_START'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'

export const GET_MYPOSTS_START = 'GET_MYPOSTS_START'
export const GET_MYPOSTS_SUCCESS = 'GET_MYPOSTS_SUCCESS'
export const GET_MYPOSTS_FAIL = 'GET_MYPOSTS_FAIL'

export const GET_POST_START = 'GET_POST_START'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAIL = 'GET_POST_FAIL'


//CRUD for Comments

export const CREATE_COMMENT_START = 'CREATE_COMMENT_START'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL'

export const UPDATE_COMMENT_START = 'UPDATE_COMMENT_START'
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS'
export const UPDATE_COMMENT_FAIL = 'UPDATE_COMMENT_FAIL'

export const DELETE_COMMENT_START = 'DELETE_COMMENT_START'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAIL = 'DELETE_COMMENT_FAIL'

export const GET_COMMENT_START = 'GET_COMMENT_START'
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS'
export const GET_COMMENT_FAIL = 'GET_COMMENT_FAIL'



export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START'
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS'
export const CREATE_MESSAGE_FAIL = 'CREATE_MESSAGE_FAIL'

export const GET_MESSAGE_START = 'GET_MESSAGE_START'
export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS'
export const GET_MESSAGE_FAIL = 'GET_MESSAGE_FAIL'

//
export const GET_CURRENT_USER_START = 'GET_CURRENT_USER_START'
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'
export const GET_CURRENT_USER_FAIL = 'GET_CURRENT_USER_FAIL'

const developement = "http://localhost:8080/api"
const production = "https://form-critic.herokuapp.com/api"
const api = production

export const getCurrentUser = payload => dispatch =>{
    dispatch({type:GET_CURRENT_USER_START})
    axiosWithAuth()
    .get('/user')
    .then(res=>{
        dispatch({type:GET_CURRENT_USER_SUCCESS, payload:res.data})
        console.log('res',res)
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:GET_CURRENT_USER_FAIL, payload:err})
    })
}

export const postLoginUser = payload=>dispatch=>{
    dispatch({type:LOGIN_START})
    axios
    .post(`${api}/users/login`, payload.credentials)
    .then(res=>{
        dispatch({type:LOGIN_SUCCESS, payload:res.data})
        console.log('token', res.data.token)
        localStorage.setItem('token', res.data.token)
        payload.props.history.push('/home')
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }))
}

export const postRegisterUser = payload=> dispatch=>{
    dispatch({type:REGISTER_START})
    axios
    .post(`${api}/users/register`, payload)
    .then(res=>{
        dispatch({type:REGISTER_SUCCESS, payload:res.data})
    })
    .catch(err=> {
        console.log(err)
        dispatch({type:REGISTER_FAIL, payload: err})})
    
}

export const getPosts = payload => dispatch =>{
    dispatch({type:GET_POSTS_START})
    axiosWithAuth()
    .get('/posts')
    .then(res=>{
        dispatch( {type:GET_POSTS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:GET_POSTS_FAIL, payload: err})
    })
}

export const getMyPosts = payload => dispatch =>{
    dispatch({type:GET_MYPOSTS_START})
    axiosWithAuth()
    .get(`/posts/${payload}/all`)
    .then(res=>{
        dispatch( {type:GET_MYPOSTS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:GET_MYPOSTS_FAIL, payload: err})
    })
}

export const getPost = payload => dispatch =>{
    console.log(payload)
    dispatch({type:GET_POST_START})
    axiosWithAuth()
    .get(`/posts/${payload.params.id}`)
    .then(res=>{
        dispatch({type:GET_POST_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:GET_POST_FAIL, payload: err})
    })
}

export const getComments = payload => dispatch =>{
    dispatch({type:GET_COMMENT_START})
    axiosWithAuth()
    .get(`/posts/${payload.params.id}/comments`)
    .then(res=>{
        dispatch({type:GET_COMMENT_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:GET_COMMENT_FAIL, payload: err})
    })
}

export const postComment = payload => dispatch =>{
    console.log(payload)
    dispatch({type:CREATE_COMMENT_START})
    axiosWithAuth()
    .post(`/posts/${payload.id}/comments`,payload.newComment)
    .then(res=>{
        dispatch({type:CREATE_COMMENT_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:CREATE_COMMENT_FAIL, payload: err})
    })
}

export const deleteComment = payload => dispatch=>{
    console.log(payload)
    const commentId = payload
    dispatch({type:DELETE_COMMENT_START})
    axiosWithAuth()
    .delete(`/posts/comments/${commentId}`)
    .then(res=>{
        console.log('delete', res)
        dispatch({type:DELETE_COMMENT_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:DELETE_COMMENT_FAIL, payload:err})
    })
}

export const createPost = payload => dispatch =>{
    console.log(payload)
    dispatch({type:CREATE_POST_START})
    axiosWithAuth()
    .post('/posts', payload)
    .then(res=>dispatch({type:CREATE_POST_SUCCESS, payload: res.data}))
    .catch(err=>{
        console.log(err)
        dispatch({type:CREATE_POST_FAIL, payload: err})
    })
}

export const deletePost = payload => dispatch =>{
    console.log(payload)
    dispatch({type:DELETE_POST_START})
    axiosWithAuth()
    .delete(`/posts/${payload}`)
    .then(res=>dispatch({type:DELETE_POST_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:DELETE_POST_FAIL, payload: err}))
}

export const editPost = payload => dispatch =>{
    dispatch({type:UPDATE_POST_START})
    axiosWithAuth()
    .put(`/posts/${payload.id}`, payload.edit)
    .then(res=>dispatch({type:UPDATE_POST_SUCCESS, payload: res.data}))
    .catch(err=>dispatch({type:UPDATE_POST_FAIL, payload:err}))
}

export const logOut = payload => dispatch =>{
    localStorage.removeItem('token')
    dispatch({type:LOGOUT_START})
}