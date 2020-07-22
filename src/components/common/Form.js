
import React from 'react';
import styled from 'styled-components';

const FormComponent = styled.form`
    margin: 0;
    padding: 0;
`;

const Form = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();

        if (props.onSubmit) {
            props.onSubmit();
        }
    }

    return (
        <FormComponent onSubmit={ onSubmit }>
            {
                props.wrapper ?
                <props.wrapper>
                    { props.children }
                </props.wrapper> :
                props.children
            }
        </FormComponent>
    );
}

export default Form;