export default function validate(values) {

    let errors = {};
    if (!values.title) {
        errors.title = 'Title is required';
    }
    if(!values.description){
        errors.description = 'Description is required.'
    }
    else if (values.description.split(/\s+/).length<10){

        errors.description = 'Description should be meaningful, please write at least 10 words.'
    }

    return errors;
};