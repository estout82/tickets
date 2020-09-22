
import React from 'react';
import styled from 'styled-components';
import Select from '../../../../common/Select';

const Wrapper = styled.div`
    font-size: 10pt;
`;

function Controls({ data, onStatusChange }) {
    return (
        <Wrapper>
            <Select 
             options={{
                 pending: 'Pending',
                 approved: 'Approved',
                 ordered: 'Ordered'
             }}
             value={data.status}
             onChange={ onStatusChange }
            />
        </Wrapper>
    )
}

export default Controls;