import React, { useEffect, useState } from 'react';
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
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, getComments, getCurrentUser } from '../../actions/index'
import Comments from './Comments'
import Footer from '../general/Copyright'

import EditPost from '../editPage/EditPost'

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
            display: 'flex'
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30%',
        margin: '0 auto'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center'
    },
    textDescription:{
        textAlign:'none',
        width: '80%',
        margin: '0 auto'
    }
})
)

//things that still need to be worked on --> 1. UX, needs lots of styling. 2. Integrate replies 3. Fix the dates. 4. Make user clickable 5. Add make sure to delete comments


const Post = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getPost(props.match))
        dispatch(getComments(props.match))
    }, [])
    const embedLink = !(state.post.video_link === undefined) ? '//www.youtube.com/embed/' + state.post.video_link.split('=')[1] : "";
    function dateFormatter(datetime) {
        // let [date, time] = datetime.split(' ')
        if (datetime) {
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
                    <Typography variant="h6" color="inherit" noWrap> Form Critic </Typography>
                </Toolbar>
            </AppBar>
            {/* <div><Typography style={{fontSize:'16px'}}variant='subtitle1'>{post.date}</Typography></div> */}
            <div className={classes.root} style={{display:'flex'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <div>
                        <iframe
                            className=  'video'
                            title='video'
                            width="560"
                            height="315"
                            src={embedLink}
                            allowFullScreen
                            frameBorder="0"
                        >
                        </iframe>
                    </div>
                    <div className={classes.commentContainer}>
                        <Comments className={classes.comment} comments={state.post.comments} props={props}></Comments>
                    </div>
                </div>
                <div className={classes.text}>
                <div>
                        <Typography variant='h2'>{state.post.title}</Typography>
                        {!state.currentUser.id ? null : state.post.user_id === state.currentUser.id ?
                            // <Link href={`/post/${state.post.id}/edit`}>
                            <>
                                <EditIcon onClick={handleClickOpen} fontSize='large' color='primary' style={{ margin: '0 4px', cursor:'pointer' }}>
                                </EditIcon>
                                <EditPost open={open} onClose={handleClose} title={state.post.title} id={state.post.id} description={state.post.description} />
                            </>
                            // </Link>
                            : null}
                        <div className={classes.subTitle}>
                            {/* <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{dateFormatter(state.post.date)}</Typography>
                            <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{state.post.username}</Typography> */}
                        </div>
                    </div>
                    <div >
                                {/* <Typography variant='h4' style={{ margin: '1% 0 1% 0' }}>Description</Typography> */}
                                <Typography className={classes.textDescription} style={{ fontSize: '16px', textAlign:'left' }} variant='body1'>{state.post.description}</Typography>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Post;