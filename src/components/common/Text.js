
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
`;

const TextComponent = styled.textarea`
    flex-grow: 1;
    padding: ${ props => props.theme.meduimPad };
    resize: none;
    background: none;
    outline: none;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    color: ${ props => props.theme.textColorOne };

    &:focus {
        border-color: ${ props => props.valid === true ? 
            props.theme.highlightColorOne : 
            props.theme.errorColorOne };
    }
`;

const ErrorWrapper = styled.div`
    position: absolute;
`;

const ErrorMessage = styled.div`
    position: relative;
    background: ${ props => props.theme.errorColorOne };
    font-size: 8pt;
    border-radius: 5px;
    padding: 3px;
    top: 50px;
`;

const Text = ({ value, placeholder, children, onChange, formState }) => {
    const handleValueChange = (event) => {
        if (onChange) onChange(event.target.value);
    }

    return (
        <Wrapper>
            <TextComponent 
            valid={ formState ? formState.valid : true }
            value={ value } 
            placeholder={ placeholder }
            onChange={ handleValueChange }>
                { children }
            </TextComponent>
            {
                formState && formState.valid === false ? (
                    <ErrorWrapper>
                        <ErrorMessage>{ formState.msg.text }</ErrorMessage>
                    </ErrorWrapper>
                ) : null
            }
        </Wrapper>
    );
}

export default Text;