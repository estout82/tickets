
import React from 'react';
import styled  from 'styled-components';

const ContentComponent = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = (props) => {
    return (
        <ContentComponent>
            {props.children}
        </ContentComponent>
    );
};

export default Content;