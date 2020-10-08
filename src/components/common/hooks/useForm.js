
// TODO: this is incomplete

import { useState } from 'react';

// this function generates the form's inital values from the fields object
const genInitalValuesFromFields = (fields) => {
    let r = {};

    Object.keys(fields).forEach(key => {
        const field = fields[key];
        let defaultValue = '';

        switch (field.element) {
            case 'input':
                defaultValue = '';
                break;
            case 'select':
                defaultValue = field.options.default ? field.options.default : '';
                break;
            case 'checkbox':
                defaultValue = false;
                break;
            default:
                break;
        }

        r[field.name] = defaultValue;
    });

    return r;
}

const useForm = (fields) => {
    const [values, setValues] = useState(genInitalValuesFromFields(fields));
    const [state, setState] = useState();

    const handleChange = (field, newValue) => {
        // TODO: fun validator
        const validator = fields[field].validator;

        if (validator) {
            let validateResult = validator(newValue);

            if (validateResult !== true) {
                setState(c => {
                    let n = {...c};
                    n[field] = { valid: false, msg: validateResult };
                    return n;
                });
            } else {
                setState(c => {
                    let n = {...c};
                    n[field] = { valid: true };
                    return n;
                })
            }
        }

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
        setValues(genInitalValuesFromFields(fields));

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