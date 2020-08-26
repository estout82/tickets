
import React from 'react';
import styled from 'styled-components';
import Accordian from '../../../../../common/Accordian';


const Row = styled.div`

`;

const Items = ({ data }) => {
    


    return (
        <Accordian
         title="Items">
            <Row>Items</Row>
        </Accordian>
    );
}

export default Items;