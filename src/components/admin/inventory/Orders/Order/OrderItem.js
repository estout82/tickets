
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr .1fr;
    font-size: 12pt;

    & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

const OrderItemEditableForm = ({ data, onChange }) => {
    return (
        <Wrapper>
            <div>{ data.item.name }</div>
            <div>
                
            </div>
            <div>
                { data.quantity }
            </div>
            <div>
                { data.source }
            </div>
            <div>x</div>
        </Wrapper>
    );
}

export default OrderItemEditableForm;