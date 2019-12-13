import{
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
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
    REGISTER_FAIL,
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAIL
} from '../actions/index'

const initialState = {
    token: '',
    isLoggingIn: false,
    isLoggedIn: false,
    loginError: '',
    registerError:'',
    postError:'',
    isLoading:false,
    currentUser:{},
    user:{},
    posts:[],
    post:{comments:[]},
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
        case GET_POSTS_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_POSTS_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case GET_POSTS_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                posts: [...action.payload]
            }
        }
        case GET_POST_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_POST_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case GET_POST_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                post: {...action.payload}
            }
        }
        case GET_COMMENT_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_COMMENT_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case GET_COMMENT_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                post: {...state.post,
                    comments:[...action.payload]
                }
            }
        }
        case CREATE_COMMENT_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case CREATE_COMMENT_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case CREATE_COMMENT_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                post: {...state.post,
                    comments:[...state.post.comments,action.payload]
                }
            }
        }
        case GET_CURRENT_USER_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_CURRENT_USER_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case GET_CURRENT_USER_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                currentUser:{...action.payload}
            }
        }
        case DELETE_COMMENT_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case DELETE_COMMENT_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case DELETE_COMMENT_SUCCESS:{ 
            return{
                ...state,
                isLoading:false,
                post:{...state.post, comments: state.post.comments.filter(comment=>comment.id!==action.payload.id)}
            }
        }
        case CREATE_POST_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case CREATE_POST_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case CREATE_POST_SUCCESS:{ 
            return{
                ...state,
                isLoading:false,
                posts:[...state.posts, action.payload] 
            }
        }
        case DELETE_POST_START:{
            return{
                ...state,
                isLoading:true
            }
        }
        case DELETE_POST_FAIL:{
            return{
                ...state,
                isLoading:false,
                postError: action.payload
            }
        }
        case DELETE_POST_SUCCESS:{ 
            return{
                ...state,
                isLoading:false,
                posts:state.posts.filter(post=>post.id!==action.payload.id)
            }
        }
        default:{
            return state
        }
    }
}