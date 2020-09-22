
import React from 'react';
import styled from 'styled-components';
import useLoading from '../../../../common/hooks/useLoading';
import useOrderPage from '../../../../../config/stores/order/useOrderPage';
import ListRow from './ListRow';

const Wrapper = styled.div`

`;

const ListBody = ({ metadata, onRowClick }) => {
    const orderPage = useOrderPage(1);
    const render = useLoading();

    const renderDoneState = () => {
        return (
            <Wrapper>
                {
                    orderPage.data.map(order => {
                        return (
                            <ListRow
                             key={ order._id }
                             metadata={ metadata }
                             data={ order }
                             onClick={ onRowClick }
                            />
                        );
                    })
                }
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: orderPage.status });
}

export default ListBody;