
import { useState, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
const example = {
    name: {
        value: 'Eric',
        // returns true on valid
        // returns { valid: false, friendlyMsg: ... }
        validator: (val) => val ? true : false,
        label: 'Name'
    }
}

function extractInitalValues(fields) {
    let r = {};

    if (!fields) return;

    Object.keys(fields).forEach(key => {
        r[key] = {
            value: fields[key].value,
            status: 'none'
        }
    })
    return r;
}

function useEditableForm(fields) {
    const [values, setValues] = useState(extractInitalValues(fields));
    const originalValues = useRef(extractInitalValues(fields));

    const handleChange = (field, value) => {
        // attempt to validate value
        const validator = fields[field].validator;

        if (validator) {
            const validateResult = validator(value);

            if (validateResult !== true) {
                // validator failed, validator will return an object like so
                // { valid: false, msg: ... }
                setValues(c => {
                    c[field].value = value;
                    c[field].status = 'error';
                    c[field].msg = validateResult.msg;
                    return c;
                });
                return;
            }
        }

        // handle setter if there is a setter for this field
        const setter = fields[field].setter;

        if (setter) {
            const newValues = setter(field, value, {...values});
            setValues(newValues);
            return;
        }

        // no seter, simply set the new values using the field
        setValues(c => {
            let r = {...c};
            r[field].value = value;
            r[field].status = 'ok';
            return r;
        });
    }
    
    // called when form is submitted
    // @param doRequest: a function to preform the request
    // - (values) => {}
    const handleSubmit = (doRequest) => {
        // ensure all fields are valid
        let allValid = true;

        Object.keys(values).forEach(key => {
            const v = values[key];

            if (v.status === 'none' || v.status === 'ok') {
                return;
            } else {
                allValid = false;
            }
        });

        // all fields are not valid, display an error message
        if (allValid !== true) {
            setValues(c => {
                c.formMeta = { status: 'error', msg: fields.formMeta.validationErrorMessage };
                return c;
            });
            return;
        }

        // preform request
        doRequest(extractInitalValues(values))
        .then(response => {
            let newOriginalValues = {}

            setValues(c => {
                newOriginalValues = {
                    ...c,
                    formMeta: { status: 'ok', msg: response.friendlyMsg }
                };
                
                return newOriginalValues;
            });
            
            // set new original values
            originalValues.current = newOriginalValues;
        })
        .catch(error => {
            setValues(c => {
                return { ...c, formMeta: { status: 'error', msg: error.msg } }
            });
        });
    }

    const doReset = () => {
        // TODO: make this better
        setValues(originalValues.current);
    }

    return {
        values,
        handleChange,
        handleSubmit,
        doReset
    }
}

export default useEditableForm;