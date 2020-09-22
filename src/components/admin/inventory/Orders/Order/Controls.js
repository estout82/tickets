
import React from 'react';
import styled from 'styled-components';
import Select from '../../../../common/Select';

const Wrapper = styled.div`
    font-size: 10pt;
`;

function Controls({ data, handleChange }) {
    return (
        <Wrapper>
            <Select 
             options={{
                 pending: 'Pending',
                 approved: 'Approved',
                 ordered: 'Ordered'
             }}
             value={data.status}
             onChange={handleChange}
            />
        </Wrapper>
    )

}

export default Controls;