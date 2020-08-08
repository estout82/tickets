
import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    display: inline-block;
    min-width: 30px;
    margin: ${ props => props.margin ? props.margin : '0 7px 0 0' };
    padding: 10px;
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

const ButtonComponentMinimal = styled.button`
    display: inline-block;
    margin: ${ props => props.margin ? props.margin : '0 7px 0 0' };
    padding: 3px;
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
    if (props.minimal) {
        return (
            <ButtonComponentMinimal
             margin={ props.margin }
             onClick={ props.onClick }>
                { props.children }
            </ButtonComponentMinimal>
        );
    }

    return (
        <ButtonComponent
         margin={ props.margin }
         onClick={ props.onClick }>
            { props.children }
        </ButtonComponent>
    );
}

export default Button;