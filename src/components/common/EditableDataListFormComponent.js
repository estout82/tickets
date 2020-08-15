
import React from 'react';
import Input from './Input';
import Select from './Select';

const EditableDataListFormComponent = ({ value, format, onChange }) => {
    const doRender = (value, format, onChange) => {
        switch (format.type) {
            case 'input':
                console.log(value);
                return (
                    <Input
                     minimal
                     value={ value }
                     onChange={ onChange }
                    />
                );
            case 'select':
                return (
                    <Select
                     value={ value } 
                     options={ format.options }
                     onChange={ onChange }
                    />
                );
            default: 
                return null;
        }
    }

    return (
        <>
            { doRender(value, format, onChange) }
        </>
    );
}

export default EditableDataListFormComponent;