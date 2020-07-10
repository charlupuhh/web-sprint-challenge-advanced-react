import { useState } from 'react';

// write your custom hook here to control your checkout form
export const useForm = (success, inVal) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(success);
    const [values, setValues] = useState(inVal);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [showSuccessMessage, setShowSuccessMessage, values, setValues, handleChanges]
}