
import React from 'react';
import styled from 'styled-components';
import Pagenation from '../../../../common/Pagenation';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const Controls = () => {
    return (
        <Wrapper>
            <Pagenation />
        </Wrapper>
    );
}

export default Controls;