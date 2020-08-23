
import React from 'react';
import styled from 'styled-components';
import useAssetBatch from '../../../config/stores/asset/useAssetBatch';

const Content = styled.div`
    height: calc(100% - 40px);
    width: 100%;
`;

const Config = (props) => {
    let x = useAssetBatch(['5f4204894c0e643874804740', '5f42048f4c0e643874804741']);
    console.log(x);

    return (
        <Content>
            Config
        </Content>
    );
}

export default Config;