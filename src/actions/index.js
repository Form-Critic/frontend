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

export const postLoginUser = payload=>dispatch=>{
    dispatch({type:LOGIN_START})
    axios
    .post('http://localhost:8080/api/users/login', payload)
    .then(res=>{
        dispatch({type:LOGIN_SUCCESS, payload:res.data})
        // payload.props.history.push('/')
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }))
}

export const postRegisterUser = payload=> dispatch=>{
    console.log('hello!!!!@FEW', payload)
    dispatch({type:REGISTER_START})
    axios
    .post('http://localhost:8080/api/users/register', payload)
    .then(res=>{
        dispatch({type:REGISTER_SUCCESS, payload:res.data})
    })
    .catch(err=> {
        console.log(err)
        dispatch({type:REGISTER_FAIL, payload: err})})
    
}