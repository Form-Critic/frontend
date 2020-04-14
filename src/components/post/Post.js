import React, { useEffect, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
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
import NavBar from '../navbar/NavBar'
import Comments from './Comments'
import Footer from '../general/Copyright'

import EditPost from '../editPage/EditPost'

const useStyles = makeStyles(theme => ({

    root: {
        margin: '3% auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
        justifyContent: 'center',
        width: '80%',
        margin: '4% auto 0 auto'
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
    subtitle: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '1% auto',
        alignItems: 'center',
        alignContent: 'center',
        padding: '2% 1%',
        borderTop: '.25px #dadada solid',
        borderBottom: '.25px #dadada solid'

    },
    text: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        margin: '0 4%',
    },
    postInfo: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center'
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
            return (new Date(Date.parse(datetime)).toLocaleString().split(',')[0])
        }
    }


    return (state.post.comments === undefined) ? <h1>Loading</h1> : (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <NavBar />
            </AppBar>
            {/* <div><Typography style={{fontSize:'16px'}}variant='subtitle1'>{post.date}</Typography></div> */}
            <div className={classes.root}>
                <Typography style={{ marginBottom: "3%", alignSelf: "center" }} variant='h3'>{state.post.title}</Typography>
                <div className={classes.postInfo}>
                    <div>
                        <iframe
                            className='video'
                            title='video'
                            width="600"
                            height="340"
                            src={embedLink}
                            allowFullScreen
                            frameBorder="0"
                        >
                        </iframe>
                    </div>
                    <Typography variant="overline" display="block" gutterBottom>
                    Post by {state.post.username} on {dateFormatter(state.post.date)}
                    </Typography>
                    <div className={classes.text}>
                        <div style={{ display: 'flex', margin: '0 auto' }}>
                            {/* <Typography style={{ marginBottom: '3%', fontSize: '22px' }} variant='h2'>{state.post.title}</Typography> */}
                            {!state.currentUser.id ? null : state.post.user_id === state.currentUser.id ?
                                <>
                                    <EditIcon onClick={handleClickOpen} fontSize='medium' color='primary' style={{ margin: '0 4px', cursor: 'pointer' }}>
                                    </EditIcon>
                                    <EditPost open={open} onClose={handleClose} title={state.post.title} id={state.post.id} description={state.post.description} />
                                </>
                                : null}
                        </div>
                        {/* <div className={classes.subtitle}>
                            <Avatar src={state.post.avatar}></Avatar>
                            <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{state.post.username}</Typography>
                            <Typography style={{ fontSize: '16px' }} variant='subtitle1'>{dateFormatter(state.post.date)}</Typography>
                        </div> */}

                        <Paper className="paper-wrap">
                            {/* <Typography variant='h4' style={{ margin: '1% 0 1% 0' }}>Description</Typography> */}
                            <Typography className={classes.textDescription} variant='body1'>{state.post.description}</Typography>
                        </Paper>
                    </div>
                </div>
                <div className={classes.commentContainer}>
                    <Comments className={classes.comment} comments={state.post.comments} props={props}></Comments>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Post;
