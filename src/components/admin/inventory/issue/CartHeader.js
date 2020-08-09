
import React from 'react';
import styled from 'styled-components';
import Select from '../../../common/Select';
import UserPicker from './UserPicker';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;

    h3 {
        margin: 0;
        padding: 0;
        font-weight: 300;
    }
`;

const Row = styled.div`

`;

const CartHeader = (props) => {
    return (
        <Wrapper>
            <h3>Cart</h3>
            <Row>
                <UserPicker />
            </Row>
        </Wrapper>
    );
}

export default CartHeader;