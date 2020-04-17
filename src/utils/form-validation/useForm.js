
import { useState, useEffect } from 'react';

const useForm = (callback, validate, type="post", edit) => {

    const [values, setValues] = useState(()=>{
       return edit? {
        description: edit? edit.description: '',
        title: edit? edit.title: ''
    } : {}
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        console.log("hello there")
        if (event) event.preventDefault();
        setErrors(validate(values, type));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    console.log("these are the errors", errors)
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;