
import React from 'react';
import styled from 'styled-components';

import SubmitTicket from './SubmitTicket';

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 1fr;
`;

const NewTicket = (props) => {
    return (
        <Content>
            <SubmitTicket />
        </Content>
    );
}

export default NewTicket;