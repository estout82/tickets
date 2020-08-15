
import React from 'react';
import styled from 'styled-components';

import Button from '../../common/Button';
import Select from '../../common/Select';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 5px;
    margin: 10px;

    input {
        grid-row: 1;
        margin: 10px;
        background: none;
        outline: none;
        border: 1px solid ${ props => props.theme.textColorTwo };
        border-radius: 5px;
        font-size: 10pt;
        padding: 10px;
        color: ${ props => props.theme.textColorOne };
    }
`;

const ControlWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin: 0 0 10px 10px;
`;

const TicketCommentForm = (props) => {
    return (
        <Wrapper>
            <input placeholder="Add a comment..." />
            <ControlWrapper>
                <Button>Post</Button>
                <Select 
                 name="title"
                 options={ { public: 'Public', private: 'Private', personal: 'Personal' } }
                />
            </ControlWrapper>
        </Wrapper>
    );
};

export default TicketCommentForm;