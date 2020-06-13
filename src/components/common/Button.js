
import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    display: inline-block;

    padding: ${ props => props.theme.meduimPad };
    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };

    color: ${ props => props.theme.highlightColorOne };
    background: none;
    outline: none;
    border: 1px solid ${ props => props.theme.highlightColorOne };
    border-radius: ${ props => props.theme.smallRound };

    font-size: ${ props => props.theme.smallSizeFont };

    &:hover {
        background: ${ props => props.theme.highlightColorOne };
        color: ${ props => props.theme.textColorThree };
        transition: color ${ props => props.theme.smallTransitionSpeed },
            background ${ props => props.theme.smallTransitionSpeed };
        cursor: pointer;
    }
`;

const Button = (props) => {
    return (
        <ButtonComponent {...props}>
            { props.children }
        </ButtonComponent>
    );
}

export default Button;