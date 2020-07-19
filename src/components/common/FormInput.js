
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    grid-column: ${ props => props.col ? props.col : 'auto' };
    grid-row: ${ props => props.row ? props.row : 'auto' };
    padding: ${ props => props.theme.largePad };
    border: 1px solid  ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    color: ${ props => props.theme.textColorOne }
`;

const Label = styled.label`
    margin-bottom: ${ props => props.theme.largeMargin };
    font-size: ${ props => props.theme.fontSizeMeduim };
    font-weight: ${ props => props.theme.meduimFont };
`;


const InputComponentWrapper = styled.div`
    position: relative;
`;

const InputComponent = styled.input`
    height: min-content;
    width: calc(100% - 20px);
    padding: ${ props => props.theme.meduimPad };
    background: none;
    outline: none;
    border: 1px solid ${ props => props.valid ? 
        props.theme.textColorTwo : props.theme.errorColorOne };
    border-radius: 5px;
    font-size: ${ props => props.theme.smallSizeFont };
    color: ${ props => props.theme.textColorOne };
`;

const ErrorWrapper = styled.div`
    position: absolute;
    top: calc(100% + 1px);
    padding: ${ props => props.theme.largePad };
    border-radius: ${ props => props.theme.smallRound };
    height: min-content;
    z-index: 10;
    background: ${ props => props.theme.errorColorOne };
    font-size: ${ props => props.theme.smallSizeFont };
`;

const FormInput = (props) => {
    const [validation, setValidation] = useState({ valid: true, msg: null });

    const handleChange = (event) => {
        const value = event.target.value;

        // check if valid
        if (props.validator) {
            const result = props.validator(value);

            // only set values if they are valid
            if (result === true) {
                setValidation({ valid: true, msg: null })
            } else {
                setValidation({
                    valid: false,
                    msg: result.msg ? result.msg : 'Please enter a valid value'
                });
            }
        }
    
        // call setters
        if (props.onChange) props.onChange(value);
        if (props.boundSetter) props.boundSetter(value);
    }

    return (
        <Wrapper row={ props.row } col={ props.col }>
            <Label errorMsg={ validation.msg } htmlFor={ props.name }>
                { props.name }
            </Label>
            <InputComponentWrapper>
                <InputComponent name={ props.name } value={ props.value }
                placeholder={ props.placeholder ? props.placeholder : props.name } 
                onChange={ handleChange } valid={ validation.valid } 
                type={ props.type } />
                {
                    validation.valid === false ? (
                        <ErrorWrapper>
                            { validation.msg }
                        </ErrorWrapper>
                    ) : null
                }
            </InputComponentWrapper>
        </Wrapper>
    );
}

export default FormInput;