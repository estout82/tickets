
import { useState } from 'react';

const useForm = (initalValues) => {
    const [ values, setValues ] = useState(initalValues);

    const onChange = (key, newValue) => {
        // TODO: add validation

        let newValues = { ...values };
        newValues[key] = newValue;
        setValues(newValues);
    } 

    return [
        values,
        onChange
    ];
}
export default useForm;