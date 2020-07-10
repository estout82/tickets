
import React from 'react';
import styled from 'styled-components';

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
`;

const Text = (props) => {
    const handleValueChange = (event) => {
        if (props.onValueChange) {
            props.onValueChange(event.target.value);
        }
    }

    return (
        <TextComponent onChange={handleValueChange} value={props.value} 
            placeholder={props.placeholder}>
            {props.children}
        </TextComponent>
    );
}

export default Text;