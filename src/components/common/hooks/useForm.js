
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

const useForm = (fields, initalValues) => {
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

    const handleContainerMouseEnter = (field) => {
        setHoveringContainer(field.name);
    }

    const handleContainerMouseLeave = () => {
        setHoveringContainer(NONE);
    }

    const genContainerProps = () => {
        console.log(fields);

        let containerProps = {};

        Object.keys(fields).forEach((key, index) => {
            containerProps[key] = {
                onMouseEnter: () => handleContainerMouseEnter(key),
                onMouseLeave: handleContainerMouseLeave
            }
        });

        return containerProps;
    }

    const genFieldProps = () => {
        return Object.keys(fields).map((key, index) => {
            return null;
        });
    }

    return [
        values,
        handleChange,
        { onSubmit: handleSubmit },
        genContainerProps(),
        genFieldProps()
    ]
}

export default useForm;