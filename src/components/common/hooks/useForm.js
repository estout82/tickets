
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

const useForm = (initalValues, options) => {
    const [values, setValues] = useState(initalValues);
    const [state, setState] = useState();

    const handleChange = (field, newValue) => {
        // TODO: fun validator

        setValues(c => {
            let n = {...values};
            n[field] = newValue;
            return n;
        });
    }

    const handleSubmit = (doRequest) => {
        // TODO: check form state to ensure validators

        // return a new promise that resolves or rejects on request completion
        return new Promise((resolve, reject) => {
            doRequest(values)
            .then(status => {
                return resolve(status);
            })
            .catch(status => {
                return reject(status);
            });
        });
    }

    const doReset = () => {
        // reset values
        setValues(initalValues);

        // reset form state
        setState();
    }

    return {
        values,
        state,
        handleChange,
        handleSubmit,
        doReset
    }
}

export default useForm;