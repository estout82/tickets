
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 40px);
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    z-index: -10;
    padding: 20px;
    background: yellow;
`;

const contentSlideIn = keyframes`
    0% {
        top: -130px;
    }

    100% {
        top: 10px;
    }
`;

const CenterWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
`;

const ContentWrapper = styled.div`
    position: relative;
    top: -100px;
    left: -50%;
    width: min-content;
    min-width: 300px;
    max-width: calc(100vw - 1000px);
    min-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    background: ${ props => props.theme.errorColorOne };
    border-radius: ${ props => props.theme.meduimRound };
    color: ${ props => props.theme.textColorOne };
    animation: ${ props => props.animation } 1s;
    animation-fill-mode: forwards;
    z-index: 10;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .2);

    h3 {
        font-weight: 300;
        padding-left: 10px;
    }
`;

const ControlWrapper = styled.div`
    margin: 0;
    padding: 0 10px 0 10px;
    display: flex; 
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        
        :hover {
            cursor: pointer;
        }
    }
`;

const MessageWrapper = styled.div`
    display: flex;
    flex-flow: column; 
    flex-grow: 1;

    p {
        margin: 0;
        padding: 5px;
    }
`;

const ErrorBanner = (props) => {
    const [shown, setShown] = useState(true);

    const handleCloseClick = () => {
        if (props.onClose) {
            props.onClose();
        }

        setShown(false);
    }

    return (
        <>
            {
                shown ? 
                <CenterWrapper>
                    <ContentWrapper animation={ contentSlideIn }>
                        <MessageWrapper>
                            { props.children }
                        </MessageWrapper>
                        <ControlWrapper>
                            <p onClick={ handleCloseClick }>x</p>
                        </ControlWrapper>
                    </ContentWrapper> 
                </CenterWrapper> : null
            }
        </>
    );
}

export default ErrorBanner;