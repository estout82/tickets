
import React from 'react';
import styled from 'styled-components';
import UsersDisplay from './UsersDisplay/UsersDisplay';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    padding: 20px;
`;

const Home = (props) => {
    return (
        <Wrapper>
            <UsersDisplay />
        </Wrapper>
    );
}

export default Home;