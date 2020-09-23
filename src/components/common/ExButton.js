
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8pt;
    background: none;
    color: ${ props => props.theme.textColorTwo };

    &:hover {
        font-weight: 700;
        color: ${ props => props.theme.highlightColorOne };
        cursor: pointer;
    }
`;

export default function ExButton({onClick}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <Wrapper
         onClick={handleClick}>
            x
        </Wrapper>
    )
}