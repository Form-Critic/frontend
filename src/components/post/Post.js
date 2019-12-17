import React, { useEffect } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, getComments, getCurrentUser } from '../../actions/index'
import Comments from './Comments'

const useStyles = makeStyles(theme => ({

    root: {
        margin: '2% auto',
        width: '80%',
    },
    content: {
        margin: '5% auto',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '90%'
    },
    commentContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    comment: {
        display: 'none',
        color: 'red',
        width: '100%'
    },
    description: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        margin: '2% auto 0 auto',
        display:'flex'
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30%',
        margin: '0 auto'
    },
})
)

//things that still need to be worked on --> 1. UX, needs lots of styling. 2. Integrate replies 3. Fix the dates. 4. Make user clickable 5. Add make sure to delete comments


const Post = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getPost(props.match))
        dispatch(getComments(props.match))
    }, [])
    const embedLink = !(state.post.video_link === undefined) ? '//www.youtube.com/embed/' + state.post.video_link.split('=')[1] : "";
    function dateFormatter(datetime) {
        // let [date, time] = datetime.split(' ')
        if (datetime){
            console.log(new Date(Date.parse(datetime)))
            return (new Date(Date.parse(datetime)).toLocaleString()) 
        }
    }


    return (state.post.comments === undefined) ? <h1>Loading</h1> : (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap> Album layout </Typography>
                </Toolbar>
            </AppBar>
            {/* <div><Typography style={{fontSize:'16px'}}variant='subtitle1'>{post.date}</Typography></div> */}
            <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                <div className={classes.title}>
                    <Typography variant='h2'>{state.post.title}</Typography>
                    {!state.currentUser.id?null:state.post.user_id===state.currentUser.id?
                    <Link href={`/post/${state.post.id}/edit`}>
                        <EditIcon color='primary' style={{margin:'0 4px'}}>
                        </EditIcon>
                    </Link>
                    :null}
                    {/* <div className={classes.subTitle}>
                        <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{dateFormatter(post.date)}</Typography>
                        <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{post.username}</Typography>
                    </div> */}
                </div>
                <div className={classes.root}>
                    <iframe
                        title='video'
                        width="560"
                        height="315"
                        src={embedLink}
                        allowFullScreen
                        frameBorder="0"
                    >
                    </iframe>
                    <div >
                        <Typography variant='h4' style={{ margin: '1% 0 1% 0' }}>Description</Typography>
                        <Typography style={{ fontSize: '16px', margin: '1% auto 1% auto', width: '70%' }} variant='body1'>{state.post.description}</Typography>
                    </div>
                </div>
                <div className={classes.commentContainer}>
                    <Comments className={classes.comment} comments={state.post.comments} props={props}></Comments>
                </div>
            </div>
        </div>
    );
};

export default Post;