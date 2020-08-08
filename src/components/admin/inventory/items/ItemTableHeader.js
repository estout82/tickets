
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: ${ props => props.cols.join(' ') };
    grid-template-rows: '1fr';
    border-top-left-radius: ${ props => props.theme.meduimRound };
    border-top-right-radius: ${ props => props.theme.meduimRound };
`;

const ColWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-weight: 200;
    padding: 0 10px;

    & > p {
        margin-top: 10px;
    }
`;

const ResizeButton = styled.span`
    height: 100%;
    width: 3px;
    background: none;

    &:hover {
        background: ${ props => props.theme.backgroundColorThree };
        cursor: col-resize;
    }
`;

const ItemTableHeader = ( props ) => {
    const handleResizeButtonClick = (colIndex) => {
        if (props.onResizeClick) {
            props.onResizeClick(colIndex);
        }
    }

    return (
        <Wrapper
         cols={ props.cols }>
            {
                props.cols.map( ( col, index ) => {
                    return (
                        <ColWrapper>
                            <p>{ 'col ' + index }</p>
                            <ResizeButton />
                        </ColWrapper>
                    );
                })
            }
        </Wrapper>
    );
}

export default ItemTableHeader;