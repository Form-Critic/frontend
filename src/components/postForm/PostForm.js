import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button'
import { Dialog } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import exercises from './options'
import { createPost } from '../../actions/index'
import validate from '../../utils/form-validation/postValidator'
import useForm from '../../utils/form-validation/useForm'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    boxSizing: 'border-box',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(6),
      // marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  fieldContainer: {
    width: 'auto',
    margin: 'auto'
  },

  field: {
    width: '95%',
    margin: '3%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));

const PostForm = (props) => {

  const { onClose, open } = props;
  const classes = useStyles();
  const inputLabel = React.useRef(null);

  const dispatch = useDispatch()

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues
  } = useForm(submitPost, validate);

  const handleClose = () => {
    onClose();
  };

  const clearForm = () =>{
    setValues({
      description:"",
      title:"",
      video_link:""
    })
  }

  function submitPost(completePost) {
    dispatch(createPost(completePost))
    handleClose()
  }

  return (
    <Dialog className={classes.root} aria-labelledby="simple-dialog-title" onClose={handleClose} open={open}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Create Post
          </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField fullWidth label="Title"
            className={classes.field}
            name='title'
            value={values.title || ''}
            onChange={handleChange}
            required>
          </TextField>
          {errors.title && (<Typography color='error' className="help is-danger">{errors.title}</Typography>)}

          <TextField InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <YouTubeIcon />
              </InputAdornment>
            ),
          }}
            fullWidth label="Video"
            className={classes.field}
            name='video_link'
            value={values.video_link || ''}
            onChange={handleChange}>
          </TextField>
          {errors.video_link && (<Typography color='error' className="help is-danger">{errors.video_link}</Typography>)}
          <FormControl className={classes.field}>
            <InputLabel ref={inputLabel}>
              Exercise
          </InputLabel>
            <Select
              name='exercise'
              labelWidth={10}
              value={values.exercise_id || 1}
              label='Exercise'
              native
              placeholder={null}
              onChange={handleChange}
              inputProps={{
                name: 'exercise_id',
                id: 'outlined-age-native-simple',
              }}
            >
              {exercises.map(exercise => <option value={exercise.id}>{exercise.name}</option>)}
            </Select>
          </FormControl>
          <TextField
            className={classes.field}
            id="outlined-multiline-static"
            label="Description"
            name='description'
            value={values.description}
            onChange={handleChange}
            multiline
            rows="6"
            helperText="Please explain in as much detail as possible what you feel when performing this exercise and any other relevant information"
          />
          {errors.description && (<Typography color='error' className="help is-danger">{errors.description}</Typography>)}
          <div style={{display:"flex"}}>
            <Button className={classes.field} variant="contained" color="secondary" onClick={()=>clearForm()}>Clear</Button>
            <Button className={classes.field} variant="contained" color="primary" type="submit">SUBMIT</Button>
          </div>
        </form>
      </Paper>
    </Dialog>
  );
};

export default PostForm;

// Hey everyone, I was hoping you could let me know whether or not my squats hit proper depth. Is hitting ass to grass whats straining my joints? My knees don't feel so hot after leg day. I desperately need any pointers from all of you! Thanks in advance!