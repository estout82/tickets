
import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List/List';
import useOrderMetadata from '../../../../config/stores/order/useOrderMetadata';
import useLoading from '../../../common/hooks/useLoading';
import Order from './Order/Order';

const Wrapper = styled.div`
    width: 100%;
    flex-grow: 1;
    border-radius: 5px;
    box-shadow: ${ props => props.theme.largeShadow };
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const Orders = () => {
    const metadata = useOrderMetadata();
    const render = useLoading();

    const [selectedOrderId, setSelectedOrderId] = useState();

    // this is called when a row in the list is clicked
    // it selects the order and displays the detail / edit pane on the right
    const handleListRowClick = (orderId) => {
        setSelectedOrderId(orderId)
    }

    const renderDoneState = () => {
        return (
            <Wrapper>
                <List 
                 metadata={ metadata }
                 onRowClick={ handleListRowClick }
                />
                {
                    selectedOrderId ?
                    <Order orderId={selectedOrderId} /> :
                    null
                }
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: metadata.status });
}

export default Orders;