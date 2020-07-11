

import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    grid-column: ${ props => props.col ? props.col : 'auto' };
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

const FormText = (props) => {
    const handleValueChange = (event) => {
        if (props.onValueChange) {
            props.onValueChange(event.target.value);
        }
    }

    return (
        <Wrapper row={props.row} col={props.col}>
            <Label htmlFor={props.name}>{props.name}</Label>
            <Text name={props.name} placeholder={props.name} 
                onValueChange={handleValueChange}/>
        </Wrapper>
    );
}

export default FormText;