
import React, { useState } from 'react';
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
    width: 50%;
    padding: 10px;
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
    const [selectedCategory, setSelectedCategory] = useState();
    const global = useGlobalStoreContext();

    const handleCategorySelectChange = (val) => {
        setSelectedCategory(val);
    }

    const onFormSubmit = () => {
        // set selected catgeory to null so form component unmounts
        setSelectedCategory();
    }

    return (
        <Content>
            <Row>
                <Header>New Ticket</Header>
            </Row>
            <Row>
                <Select 
                 options={ global.ticket.categories.asOptions() }
                 onChange={ handleCategorySelectChange }
                 value={ selectedCategory }
                />
            </Row>
            {
                selectedCategory ?
                <TicketForm
                 formDefinition={ global.ticket.categories.getById(selectedCategory).form } 
                 categoryId={ selectedCategory }
                 onFormSubmit={ onFormSubmit }
                /> :
                null
            }
        </Content>
    );
}

export default NewTicket;