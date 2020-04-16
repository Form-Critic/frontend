// export default function validate(values) {
//     const ytRegex = RegExp('^(http(s)??\\:\\/\\/)?(www\\.)?((youtube\\.com\\/watch\\?v=)|(youtu.be\\/))([a-zA-Z0-9\\-_])+$')
//     let errors = {};
//     if (!values.title) {
//         errors.title = 'Title is required';
//     }
//     if (!values.video_link) {
//         errors.video_link = 'YouTube link is required';

//     }
//     else if (!ytRegex.test(values.video_link)) {
//         errors.video_link = 'At the moment YouTube links are only supported. Please provide valid link.'
//     }
//     if(!values.description){
//         errors.description = 'Description is required.'
//     }
//     else if (values.description.split(/\s+/).length<10){

//         errors.description = 'Description should be meaningful, please write at least 10 words.'
//     }


//     return errors;
// };

export default function validate(values, formType="post") {

    const ytRegex = RegExp('^(http(s)??\\:\\/\\/)?(www\\.)?((youtube\\.com\\/watch\\?v=)|(youtu.be\\/))([a-zA-Z0-9\\-_])+$')
    const emailRegex = RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")

    let errors = {};
    switch(formType){
        case "post":
            if (!values.title) {
                errors.title = 'Title is required';
            }
            if (!values.video_link) {
                errors.video_link = 'YouTube link is required';

            }
            else if (!ytRegex.test(values.video_link)) {
                errors.video_link = 'At the moment YouTube links are only supported. Please provide valid link'
            }
            if(!values.description){
                errors.description = 'Description is required'
            }
            else if (values.description.split(/\s+/).length<10){

                errors.description = 'Description should be meaningful, please write at least 10 words'
            }
            break
        case "edit":
            if (!values.title) {
                errors.title = 'Title is required';
            }
            if(!values.description){
                errors.description = 'Description is required'
            }
            else if (values.description.split(/\s+/).length<10){
        
                errors.description = 'Description should be meaningful, please write at least 10 words'
            }
            break
        case "login":
            if(!values.username){
                errors.username = "Username is required"
            }
            if (!values.password){
                errors.password = "Password is required"
            }
            break
        case "register":
            console.log(values)
            if (!values.name){
                errors.name = "Name is required"
            }
            if(!values.email){
                errors.email = "Email is required"
            }
            else if (!emailRegex.test(values.email)){
                errors.email = "Please enter a valid email"
            }
            if(!values.username){
                errors.username = "Username is required"
            }
            if (!values.password){
                errors.password = "Password is required"
            }
            break
        default: break
}


    return errors;
};