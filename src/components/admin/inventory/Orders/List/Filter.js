
import React from 'react';
import styled from 'styled-components';
import Input from '../../../../common/Input';

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
`;

const Filter = (props) => {
    return (
        <Wrapper>
            <Input 
              placeholder="Search"
            />
        </Wrapper>
    );
}

export default Filter;