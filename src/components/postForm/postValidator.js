export default function validate(values) {
    const ytRegex = RegExp('^(http(s)??\\:\\/\\/)?(www\\.)?((youtube\\.com\\/watch\\?v=)|(youtu.be\\/))([a-zA-Z0-9\\-_])+$')
    let errors = {};
    if (!values.title) {
        errors.title = 'Title is required';
    }
    if (!values.video_link) {
        errors.video_link = 'YouTube link is required';

    }
    else if (!ytRegex.test(values.video_link)) {
        errors.video_link = 'At the moment YouTube links are only supported. Please provide valid link.'
    }
    if(!values.description){
        errors.description = 'Description is required.'
    }
    else if (values.description.split(/\s+/).length<10){

        errors.description = 'Description should be meaningful, please write at least 10 words.'
    }


    return errors;
};