import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

  const useStyles = makeStyles(theme => ({
    card: {
      width: '100%',
      flexWrap:'wrap'
    //   maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: deepPurple[500],
    },
    paper: {
        padding: theme.spacing(4),
        margin: 'auto',
        width:'90%',
        background:'whitesmoke',
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap'
      },
      gridItem:{
        margin: '1% auto',
      },
      CardHeader:{
        fontSize: '36px',
      }
  }));


const Post = ({post, props}) => {

    const classes = useStyles();
    const video_id = (post.video_link.split('='))[1]
    const thumbnail =`https://img.youtube.com/vi/${video_id}/sddefault.jpg`
    const firstLetter = post.user.split('')[0]

    const formatDate = timeObj=>{
        const oldDate = timeObj.split(' ')[0].split('-')
        console.log(oldDate)
        const newDate = new Date(Number(oldDate[0]), Number(oldDate[1])-1, Number(oldDate[2]))
        console.log(newDate)
        return newDate
    }

    return (
      <Grid className={classes.gridItem} item xs={10} sm={9} md={5} xl={7}>
            <Card className={classes.card}>
                <CardHeader
                avatar={ <Avatar className={classes.avatar}>{firstLetter}</Avatar>}
                title={post.title}
                titleTypographyProps={{variant:"h6"}}
                subheader={(post.date)}
                subheaderTypographyProps={{variant:"h6"}}
                />
                <CardMedia className={classes.media} image={(thumbnail)}   title={post.exercise}/>
            </Card>
        </Grid>
    );
};

export default Post;