
import React from 'react';
import styled from 'styled-components';
import useCategories from '../../../config/stores/asset/useCategories';

// TODO: make the grid responsive

const Content = styled.div`
    height: calc(100% - 40px);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 200px);
    grid-auto-rows: 200px;
    grid-gap: 20px 20px;
    margin: 20px;
    color: ${ props => props.theme.textColorOne };
    overflow: scroll;
`;

const Config = (props) => {
    let x = useCategories();
    console.log(x);

    return (
        <Content>
            
        </Content>
    );
}

export default Config;