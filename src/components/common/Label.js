
import React from 'react';
import styled from 'styled-components';

const LabelComponent = styled.span`
    background: ${ props => props.theme.highlightColorOne };
    width: 55px;
    height: 23px;
    border-radius: 30px;
    color: white;
    text-align: center;
    line-height: 23px;
`;

const Label = (props) => {
    return (
        <LabelComponent>{props.children}</LabelComponent>
    );
}

export default Label;