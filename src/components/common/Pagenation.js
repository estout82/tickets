
// TODO: make a better page icon generation algo

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const PageControlButton = styled.button`
    padding: 10px;
    min-width: 40px;
    margin: 0 20px;
    background: none;
    border: 1px solid ${ props => props.theme.highlightColorOne };
    border-radius: 5px;
    color: ${ props => props.theme.highlightColorOne };
    outline: none;

    :hover {
        background: ${ props => props.theme.highlightColorOne };
        color: white;
        transition: .15s background;
        cursor: pointer;
    }
`;

const PageIcon = styled.span`
    padding: 10px 0;
    min-width: 30px;
    border: ${ props => props.selected ? '1px solid ' + props.theme.textColorTwo : 'none' };
    border-radius: 10px;
    text-align: center;
    margin-right: 5px;
    font-size: 10pt;
    font-weight: 200;

    &:hover {
        cursor: ${ props => props.selected ? 'auto' : 'pointer' };
        color: ${ props => props.selected ? 'inherit' : props.theme.highlightColorOne };
    }
`;

const Pagenation = (props) => {
    const handlePrevPageClick = () => {
        if ( props.currentPage > 1 && props.onPageChange ) {
            props.onPageChange(props.currentPage - 1);
        }
    }

    const handleNextPageClick = () => {
        if ( props.currentPage < props.numPages && props.onPageChange ) {
            props.onPageChange(props.currentPage + 1);
        }
    }

    const handlePageClick = (page) => {
        if ( props.onPageChange ) {
            props.onPageChange(page);
        }
    }

    return (
        <Wrapper>
            <PageControlButton
             onClick={ handlePrevPageClick }>
                &lt;
            </PageControlButton>
                {
                    (() => {
                        let components = [];

                        for ( let i = 1; i < props.numPages + 1; i++ ) {
                            if ( props.currentPage === i ) {
                                components.push(
                                    <PageIcon 
                                     selected>
                                        { i }
                                    </PageIcon> 
                                );
                            } else {
                                components.push(
                                    <PageIcon
                                     onClick={ () => handlePageClick(i) }>
                                        { i }
                                    </PageIcon>
                                );
                            }
                        }

                        return components;
                    })()
                }
            <PageControlButton
             onClick={ handleNextPageClick }>
                &gt;
            </PageControlButton>
        </Wrapper>
    );
}

export default Pagenation;