
import React from 'react';
import styled from 'styled-components';
import TicketForm from './TicketForm';
import Select from '../../common/Select';
import useGlobalStoreContext from '../../../config/stores/global/useGlobalStoreContext';

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    width: 200px;
    height: 100px;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const Header = styled.h3`
    font-weight: 200;
    font-size: 16pt;
    margin: 10px;
`;

const NewTicket = () => {
    const global = useGlobalStoreContext();

    console.log(global.meta.data);

    return (
        <Content>
            <Row>
                <Header>New Ticket</Header>
            </Row>
            <Row>
                <Select 
                 options={{
                     hardwareIssue: 'Hardware Issue'
                 }}
                />
            </Row>
            <TicketForm />
        </Content>
    );
}

export default NewTicket;