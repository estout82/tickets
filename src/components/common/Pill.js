
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 30px;
    background: ${ props => 
        props.appearance ?
        props.theme.background[props.appearance] : 
        props.theme.highlightColorOne 
    };
    font-size: 10pt;
    padding: 0 10px;
    color: ${ props => 
        props.appearance ? 
        props.theme.text[props.appearance] : 
        props.theme.textColorThree 
    };
    min-width: 30px;
    text-align: center;
`;

function Pill({ children, appearance }) {
    return (
        <Wrapper appearance={ appearance }>
            { children }
        </Wrapper>
    );
}

export default Pill;