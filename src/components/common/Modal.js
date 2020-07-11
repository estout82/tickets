
// TODO: handle state of shown (elevete or nah?)

import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: ${ props => props.shown ? 'flex' : 'none' };
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .6);
`;

const ContentWrapper = styled.div`
    width: ${ props => props.size.width ? props.size.width : '400px' };
    height: ${ props => props.size.height ? props.size.height : '400px' };
    min-height: 400px;
    background: orange;
    display: flex;
    flex-flow: column nowrap;
    background: ${ props => props.theme.backgroundColorOne }; 
    border-radius: ${ props => props.theme.meduimRound };
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;

const Header = styled.div`
    width: 100%;
    min-height: 50px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    background: ${ props => props.theme.backgroundColorThree };
    border-top-left-radius: ${ props => props.theme.meduimRound }; 
    border-top-right-radius: ${ props => props.theme.meduimRound }; 
    color: ${ props => props.theme.textColorOne };

    h3 {
        font-weight: 400;
        padding: ${ props => props.theme.largePad };
        margin: 0;
    }

    button {
        background: none;
        outline: none;
        border: none;
        box-shadow: none;
        margin-right: 10px;
        
        &:hover {
            cursor: pointer;
        }
    }
`;

const Modal = (props) => {
    const [shown, setShown] = useState(props.shown);

    const handleCloseClick = () => {
        if (props.onClose) {
            // call callback
            const result = props.onClose();

            if (result === true) {
                setShown(false);
            }
        } else {
            setShown(false);
        }
    }

    return (
        <Wrapper shown={ shown }>
            <ContentWrapper size={ props.size }>
                <Header>
                    <h3>{ props.title }</h3>
                    <ButtonWrapper>
                        <button onClick={handleCloseClick}>X</button>
                    </ButtonWrapper>
                </Header>
                { props.children }
            </ContentWrapper>
        </Wrapper>
    );
}

export default Modal;