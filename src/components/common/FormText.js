

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    grid-column: ${ props => props.column ? props.column : 'auto' };
    grid-row: ${ props => props.row ? props.row : 'auto' };
    padding: ${ props => props.theme.largePad };
    border: 1px solid  ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    color: ${ props => props.theme.textColorOne };
    font-size: ${ props => props.theme.fontSizeMeduim };
    font-weight: ${ props => props.theme.meduimFont };
`;

const Label = styled.label`
    margin-bottom: ${ props => props.theme.largeMargin };
`;

const Text = styled.textarea`
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

const FormText = (props) => {
    const handleChange = (event) => {
        if (props.onValueChange) {
            props.onValueChange(event.target.value);
        }
    }

    return (
        <Wrapper row={props.row} column={props.column}>
            <Label htmlFor={props.name}>{props.name}</Label>
            <Text name={props.name} placeholder={props.name} 
                onChange={handleChange} />
        </Wrapper>
    );
}

export default FormText;