
import React from 'react';
import styled from 'styled-components';
import Select from '../../../../common/Select';
import Message from '../../../../common/Message';

const Wrapper = styled.div`
    font-size: 10pt;
`;

const Spacer = styled.div`
    margin: 10px 0;
`;

function Controls({ data, onStatusChange, msg }) {
    console.log(msg);

    return (
        <Wrapper>
            <Spacer>
                <Select 
                 options={{
                     pending: 'Pending',
                     approved: 'Approved',
                     ordered: 'Ordered'
                 }}
                 value={data.status}
                 onChange={ onStatusChange }
                />
            </Spacer>
            {
                msg ?
                <Spacer>
                    <Message msg={msg.msg} appearance={msg.appearance} />
                </Spacer> :
                null
            }
        </Wrapper>
    )
}

export default Controls;