
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../../../common/Input';
import Button from '../../../../common/Button';
import NewOrderModal from './NewOrderModal';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
    margin: 0;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 10px;
`;

const Controls = (props) => {
    const [showNewOrderModal, setShowNewOrderModal] = useState(false);

    const handleNewOrderClick = () => {
        setShowNewOrderModal(true);
    }

    const handleNewOrderModalClose = () => {
        setShowNewOrderModal(false);
    }

    return (
        <Wrapper>
            <Row>
                <Input placeholder="Search"/>
            </Row>
            <Row>
                <Button
                 onClick={handleNewOrderClick}>
                    New Order
                </Button>
            </Row>
            { 
                showNewOrderModal ?
                <NewOrderModal 
                 onClose={handleNewOrderModalClose}
                /> :
                null
            }
        </Wrapper>
    );
}

export default Controls;