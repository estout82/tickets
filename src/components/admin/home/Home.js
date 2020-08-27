
import React from 'react';
import styled from 'styled-components';
import UsersDisplay from './UsersDisplay/UsersDisplay';
import useGlobalStore from '../../../config/stores/global/useGlobalStore';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    padding: 20px;
`;

const Home = (props) => {
    let x = useGlobalStore();
    console.dir(x);

    return (
        <Wrapper>
            <UsersDisplay />
        </Wrapper>
    );
}

export default Home;