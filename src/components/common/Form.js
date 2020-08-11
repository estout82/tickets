
import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import Input from './Input';
import Checkbox from './Checkbox';
import Field from './FormFieldContainer';

const Wrapper = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
`;

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        if (props.onSubmit) {
            props.onSubmit();
        }
    }

    return (
        <Wrapper
         onSubmit={ handleSubmit }>
            { props.children }
        </Wrapper>
    );
}

export default Form;

exports = {
    Select,
    Input,
    Checkbox,
    Field
};
