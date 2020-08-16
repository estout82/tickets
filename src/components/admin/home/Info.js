
import React from 'react';
import styled from 'styled-components';
import InfoControls from './InfoControls';
import InfoTable from './InfoTable';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
    border-radius: 5px;
`;

const Info = (props) => {
    return (
        <Wrapper>
            <InfoControls />
            <InfoTable />
        </Wrapper>
    );
}

export default Info;