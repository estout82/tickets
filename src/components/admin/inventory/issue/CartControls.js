
import React from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

const StartWrapper = styled.div`

`;

const EndWrapper = styled.div`

`;

const CartControls = (props) => {
    return (
        <Wrapper>
            <StartWrapper>
                <Button>Save</Button>
            </StartWrapper>
            <EndWrapper>
                <p>Total: $100.00</p>
            </EndWrapper>
        </Wrapper>
    );
}

export default CartControls;