
import React, { useCallback } from 'react';
import styled from 'styled-components';
import List from './List/List';
import useOrderMetadata from '../../../../config/stores/order/useOrderMetadata';
import useLoading from '../../../common/hooks/useLoading';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: ${ props => props.theme.largeShadow };
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const Orders = (props) => {
    // hook to load metadata
    const metadata = useOrderMetadata();

    const getStatus = useCallback(() => {
        console.dir(metadata);
        return metadata.status;
    }, [metadata]);

    // hook to display loading / error state
    const render = useLoading(getStatus);

    const renderDoneState = () => {
        return (
            <Wrapper>
                <List />
            </Wrapper>
        );
    }

    return render(renderDoneState);
}

export default Orders;