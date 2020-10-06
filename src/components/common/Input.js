
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

    &:focus {
        border-color: ${ props => props.theme.highlightColorOne };
    }

    &::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const InputComponentMinimal = styled.input`
    display: inline-block;
    width: ${ props => props.fliud ? '100%' : 'auto' };
    padding: 3px;
    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };
    background: none;
    outline: none;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    color: ${ props => props.theme.textColorOne };
    font-size: 10pt;
    font-weight: 300;

    &:focus {
        border-color: ${ props => props.theme.highlightColorOne };
    }

    &::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const Input = (props) => {
    const handleValueChange = (event) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
    }

    if (props.minimal) {
        return (
            <InputComponentMinimal
             name={ props.name }
             onChange={ handleValueChange }
             onBlur={ props.onBlur }
             onFocus={ props.onFocus }
             onClick={ props.onClick }
             value={ props.value }
             placeholder={ props.placeholder } 
            />
        );
    }

    return (
        <InputComponent 
         name={ props.name } 
         onChange={ handleValueChange } 
         onBlur={ props.onBlur }
         onFocus={ props.onFocus }
         onClick={ props.onClick }
         value={ props.value } 
         ref={ props.innerRef } 
         placeholder={ props.placeholder }
         fluid={ props.fluid }
        />
    );
};

export default Input;