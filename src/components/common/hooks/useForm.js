
// TODO: this is incomplete

import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const exampleData = [
    {
        name: 'age',
        label: 'Age',
        validator: (value) => /[0-9]*/.test(value),
        required: true,
        editable: true
    }
]

const NONE = -1;

const useForm = (initalValues) => {
    const [ values, setValues ] = useState( initalValues );
    
    // eslint-disable-next-line no-unused-vars
    const [ hoveringContainer, setHoveringContainer ] = useState(NONE);

    const handleChange = (field, newValue) => {
        let newValues = { ...values };
        newValues[field] = newValue;
        setValues(newValues);

        // check for error
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return [
        values,
        handleChange,
        { onSubmit: handleSubmit }
    ]
}

export default useForm;