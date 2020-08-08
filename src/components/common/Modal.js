
// TODO: handle state of shown (elevete or nah?)

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .6);
`;

const ContentWrapper = styled.div`
    width: ${ props => props.size.width ? props.size.width : '400px' };
    height: ${ props => props.size.height ? props.size.height : '400px' };
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

const TitleWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

const Header = styled.div`
    width: 100%;
    min-height: 40px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    border-top-left-radius: ${ props => props.theme.meduimRound }; 
    border-top-right-radius: ${ props => props.theme.meduimRound }; 
    color: ${ props => props.theme.textColorOne };

    h3 {
        font-weight: 400;
        padding: 10px 10px 0 10px;
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

    return (
        <Wrapper>
            <ContentWrapper size={ props.size }>
                <Header>
                    <TitleWrapper>
                        <h3>
                            { props.title }
                        </h3>
                    </TitleWrapper>
                    <ButtonWrapper>
                        <button onClick={ props.onClose ? props.onClose : () => {} }>X</button>
                    </ButtonWrapper>
                </Header>
                { props.children }
            </ContentWrapper>
        </Wrapper>
    );
}

export default Modal;