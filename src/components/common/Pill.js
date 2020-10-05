
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 30px;
    background: ${ props => props.background ? props.theme[props.background] : props.theme.highlightColorOne };
    font-size: 10pt;
    padding: 0 10px;
    color: ${ props => props.color ? props.theme[props.color] : props.theme.textColorThree };
    min-width: 30px;
    text-align: center;
`;

// TODO: fix this
function getBackgroundFromAppearance(appearance) {
    switch (appearance) {
        case 'ok': 
            return 'okColorOne';
        case 'none':
            return 'backgroundColorTwo';
        case 'warning':
            return 'warningColorOne';
        case 'error':
            return 'errorColorOne';
        case 'neutral':
            return 'neutralColorOne';
        default:
            return null;
    }
}

// TODO: fix this
function getColorFromAppearance(appearance) {
    switch (appearance) {
        case 'ok': 
            return 'textColorOne';
        case 'none':
            return 'textColorOne';
        case 'warning':
            return 'textColorOne';
        case 'error':
            return 'textColorOne';
        default:
            return null;
    }
}

function Pill({ children, appearance }) {
    return (
        <Wrapper 
         background={ getBackgroundFromAppearance(appearance) }
         color={ getColorFromAppearance(appearance) }>
            { children }
        </Wrapper>
    );
}

export default Pill;