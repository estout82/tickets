
import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Button from '../../common/Button';

const Header = styled.h3`
    font-weight: ${ props => props.theme.meduimFont };
`;

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
`;

const AzureIntegrationCard = (props) => {

    const startIntegration = () => {
        
    }

    return (
        <Card pos={props.pos} size={{ width: 1, height: 1}}>
            <Header>Azure Integration</Header>
            <Content>
                <Button onClick={startIntegration}>Start</Button>
            </Content>
        </Card>
    );
}

export default AzureIntegrationCard;