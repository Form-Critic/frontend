import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea'
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../navbar/NavBar'

import PostForm from '../postForm/PostForm'
import { getPosts, getCurrentUser, getMyPosts } from '../../actions/index'
import DeletePostSelect from '../deletePost/DeletePostSelect'
import Footer from '../general/Copyright'


//notes delete PostGrid and Post if they are not in use!

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    padding: theme.spacing(8, 0, 6),
    color: '#e8eaf6'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Dash() {

  const classes = useStyles();
  const dispatch = useDispatch()
  const currentState = useSelector(state => state)
  const [open, setOpen] = useState(false);
  const [myPosts, setMyPosts] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getCurrentUser())
  }, [])
  const fetchPosts = (userId) =>{
    myPosts?dispatch(getPosts()): dispatch(getMyPosts(userId))
  }
  console.log(currentState)
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="#e8eaf6" gutterBottom>
              Welcome Back!
            </Typography>
            <Typography variant="h5" align="center" color="#e8eaf6" paragraph>
              Perfecting form is tapping your potential. <br />Be a part of something BIGGER!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={handleClickOpen} variant="contained" color="primary">
                    Get Checked
                  </Button>
                  <PostForm open={open} onClose={handleClose} />
                </Grid>
                <Grid item>
                  <Button onClick={()=>{
                    fetchPosts(currentState.currentUser.id)
                    setMyPosts(!myPosts)
                  }} variant="contained" color="primary">
                    {myPosts? 'All Posts':'My Posts'}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {currentState.posts.length ? currentState.posts.map((post) =>
              // {cards.map(card => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <Link href={`/post/${post.id}`}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={`https://img.youtube.com/vi/${(post.video_link.split('='))[1]}/sddefault.jpg`}
                        title={post.exercises}
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                      {post.description.split('').splice(0, 25).join('') + ('...')}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <DeletePostSelect
                      currentUserId={currentState.currentUser.id}
                      postId={post.id}
                      userId={post.user_id}
                    ></DeletePostSelect>
                  </CardActions>

                </Card>
              </Grid>
            ) : <></>}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}