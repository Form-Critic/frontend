import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { editPost } from '../../actions/index'
import validate from './editValidator'
import useForm from '../postForm/useForm'

// this is me trying to do benchpress, just kidding it's Jeff. If you're having trouble performing this exercise, check this video out!

const useStyles = makeStyles(theme => ({
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
    field: {
        width: '100%',
        margin: '3% auto',
    },
})
)

export default function EditPost(props) {
    console.log('props ', props)
    const classes = useStyles();
    const { onClose, open, title, description, id } = props;
    const goodSquat = 'https://upload.wikimedia.org/wikipedia/uk/a/aa/%D0%A1%D1%82%D1%80%D0%B8%D0%B1%D0%BA%D0%B8_%D0%BB%D1%96%D1%82%D0%BD%D1%8C%D0%BE%D1%97_%D0%BB%D1%8E%D0%B4%D0%B8%D0%BD%D0%B8_%D0%B7%D1%96_%D1%88%D1%82%D0%B0%D0%BD%D0%B3%D0%BE%D1%8E.gif'

    const dispatch = useDispatch()

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(submitPost, validate, {title, description});

    function submitPost(edit) {
        dispatch(editPost({edit,id:id}))
        handleClose()
    }

    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Edit Post
          </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField fullWidth label="Title"
                        className={classes.field}
                        name='title'
                        placeholder={title}
                        value={values.title || ''}
                        onChange={handleChange}
                        required>
                    </TextField>
                    {errors.title && (<Typography color='error' className="help is-danger">{errors.title}</Typography>)}
                    <TextField
                        className={classes.field}
                        id="outlined-multiline-static"
                        label="Description"
                        name='description'
                        value={values.description || ''}
                        onChange={handleChange}
                        multiline
                        rows="6"
                        helperText="Please explain in as much detail as possible what you feel when performing this exercise and any other relevant information"
                    />
                    {errors.description && (<Typography color='error' className="help is-danger">{errors.description}</Typography>)}
                    <Button className={classes.field} variant="contained" color="primary" type="submit">Edit</Button>
                </form>
            </Paper>
        </Dialog>

    )
}