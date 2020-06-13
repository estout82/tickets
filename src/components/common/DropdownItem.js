
import React from 'react';
import styled from 'styled-components';

const DropdownItemComponent = styled.div`
    padding: ${ props => props.theme.smallPad };

    &:hover {
        background: ${ props => props.theme.backgroundColorOne };
    }
`;

const DropdownItem = (props) => {
    return (
        <DropdownItemComponent {...props}>
            {props.children}
        </DropdownItemComponent>
    ); 
};

export default DropdownItem;