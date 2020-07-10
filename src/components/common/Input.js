
import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
    display: inline-block;
    width: ${ props => props.fliud ? '100%' : 'auto' };

    padding: ${ props => props.theme.smallPad };
    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };

    background: none;
    outline: none;

    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    font-size: ${ props => props.theme.meduimSizeFont };
    color: ${ props => props.theme.textColorOne };

    &::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const Input = (props) => {
    const handleValueChange = (event) => {
        if (props.onValueChange) {
            props.onValueChange(event.target.value);
        }
    }

    return (
        <InputComponent name={props.name} onChange={handleValueChange} value={props.value} 
            placeholder={props.placeholder}>
            {props.value}
        </InputComponent>
    );
};

export default Input;