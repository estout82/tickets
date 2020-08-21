
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${ props => props.theme.textColorTwo };
    font-size: 10pt;
`;

const RotateIconAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(90deg);
    }
`;


const accordianIconAnimCss = css`
    animation: 1s ${RotateIconAnimation};
    animation-fill-mode: forwards;
`;

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }

    p {
        font-weight: 600
    }

    span {
        color: ${ props => props.theme.textColorTwo };
        ${ props => props.isExpanded ? accordianIconAnimCss : 'animation: none;' };
    }
`;

const Expand = styled.div`
    margin-top: 5px;
    display: ${ props => props.isExpanded ? 'flex' : 'none' };
    flex-flow: column nowrap;
`;

const Accordian = ({ children, title, isExpanded, onExpand, onCollapse }) => {
    const handleHeaderClick = () => {
        if (onExpand && !isExpanded) {
            onExpand();
        } else if (onExpand && isExpanded) {
            onCollapse();
        }
    }

    return (
        <Wrapper>
            <Header
             onClick={ handleHeaderClick }>
                { title }
            </Header>
            <Expand isExpanded={ isExpanded }>
                { children }
            </Expand>
        </Wrapper>
    );
}

export default Accordian;