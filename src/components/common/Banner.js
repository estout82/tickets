
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
    top: -120px;
    left: -50%;
    width: min-content;
    min-width: 300px;
    max-width: calc(100vw - 1000px);
    min-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background: ${ props => props.type ? props.colorMap[props.type] :
        props.theme.errorColorOne };
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

const Banner = (props) => {
    // constants
    const colorMap = {
        error: '#edada3', // TODO: make a context with these
        ok: '#b6edbc'
    }

    // state
    const [shown, setShown] = useState(true);

    // behavior
    const handleCloseClick = () => {
        if (props.onClose) {
            props.onClose();
        }

        setShown(false);
    }

    // rendering
    return (
        <>
            {
                shown ? 
                <CenterWrapper>
                    <ContentWrapper type={ props.type } colorMap={ colorMap } 
                     animation={ contentSlideIn }>
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

export default Banner;