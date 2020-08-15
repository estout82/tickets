
import React from 'react';
import styled from 'styled-components';

import Select from './Select';

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

const FormSelect = (props) => {
    return (
        <Wrapper row={ props.row } col={ props.col }>
            <Label htmlFor={ props.name }>{ props.name }</Label>
            <Select name={ props.name } defaultValue={ props.name }
             options={ props.options } boundSetter={ props.boundSetter }
             onChange={ props.onChange } />
        </Wrapper>
    );
}

export default FormSelect;