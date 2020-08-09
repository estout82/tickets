
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 5px;
    background: ${ props => props.value === true ? props.theme.highlightColorOne : 'none' };

    &:hover {
        cursor: pointer;
    }
`;

const Checkbox = (props) => {
    const handleClick = () => {
        if (props.onChange) {
            const newValue = !(props.value === true)
            props.onChange(newValue);
        }
    }

    return (
        <Wrapper 
         value={ props.value }
         onClick={ handleClick }>
        </Wrapper>
    );
}

export default Checkbox;