
import React from 'react';
import styled from 'styled-components';

import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/DropdownItem';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: ${ props => props.theme.largePad };
    border: 1px solid  ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    color: ${ props => props.theme.textColorOne }
`;

const Title = styled.h3`
    
`;

const SubmitTicketSelect = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Dropdown title={props.title}>
                {
                    props.options.map(option => {
                        return (
                            <DropdownItem key={option}>
                                {option}
                            </DropdownItem>
                        );
                    })
                }
            </Dropdown>
        </Wrapper>
    );
}

export default SubmitTicketSelect;