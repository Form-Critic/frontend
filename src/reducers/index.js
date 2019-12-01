import{
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    GET_POST_START,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    CREATE_COMMENT_START,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL,
    UPDATE_COMMENT_START,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAIL,
    DELETE_COMMENT_START,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAIL,
    GET_COMMENT_START,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
    CREATE_MESSAGE_START,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAIL,
    GET_MESSAGE_START,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAIL,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/index'

const initialState = {
    token: '',
    isLoggingIn: false,
    isLoggedIn: false,
    loginError: '',
    registerError:'',
    user:{},
    posts:[],
    messages:[]
}
export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:{
            return{
                ...state,
                isLoggingIn:true
            }
        }
        case LOGIN_FAIL:{
            return{
                ...state,
                isLoggedIn:false,
                isLoggingIn:false,
                loginError: action.payload
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isLoggedIn:true,
                isLoggingIn:false,
                token: action.payload.token,
                user:{name:action.payload.name, email:action.payload.email, username:action.payload.username}

            }
        }
        case REGISTER_START:{
            return{
                ...state,
                isLoggingIn:true
            }
        }
        case REGISTER_FAIL:{
            return{
                ...state,
                isLoggedIn:false,
                isLoggingIn:false,
                loginError: action.payload
            }
        }
        case REGISTER_SUCCESS:{
            return{
                ...state,
                isLoggedIn:true,
                isLoggingIn:false,
                token: action.payload.token,
                user:{name:action.payload.name, email:action.payload.email, username:action.payload.username}
            }
        }
        default:{
            return state
        }
    }
}