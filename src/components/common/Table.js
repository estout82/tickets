
// TODO: make the resizeable columns better

import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: grid;
    grid-template-rows: 50px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const Row = styled.div`
    display: grid;
    padding: 10px;

    &:hover {
        background: ${ props => props.theme.highlightColorTwo };
        cursor: pointer;
    }
`;

const Body = styled.div`
    display: flex; 
    flex-flow: column;
    justify-content: flex-start;
`;

const HeaderCell = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    width: ${ props => props.width ? props.width : 'auto' };

    & > span {
        height: 75%;
        width: 3px;
        background: ${ props => props.theme.backgroundColorThree };

        &:hover {
            cursor: col-resize;
            background: ${ props => props.theme.highlightColorOne };
        }

        &:active {
            cursor: col-resize;
            background: ${ props => props.theme.highlightColorOne };
        }
    }
`;

const Table = (props) => {
    const [colWidths, setColWidths] = useState(props.data.head.map( () => '1fr'));
    const resizeState = useRef({
        isResizing: true,
        lastClientX: 0
    });
    const headerRefs = useRef(() => {
        let a = [];
        colWidths.forEach(() => a.push(React.createRef()));
    });

    const getRef = (index) => {
        return headerRefs.current[index];
    }

    const handleResizeMouseDown = (event, index) => {
        const mouseMoveWrapper = (mouseMoveEvent) => {
            handleResizeMouseMove(mouseMoveEvent, index);
        }

        const mouseUpWrapper = (mouseUpEvent) => {
            handleResizeMouseUp(mouseUpEvent, mouseUpWrapper, mouseMoveWrapper);
        }

        document.addEventListener('mousemove', mouseMoveWrapper);
        document.addEventListener('mouseup', mouseUpWrapper);

        resizeState.current = {
            isResizing: true,
            lastClientX: event.clientX
        };
    }

    const handleResizeMouseUp = (event, mouseUpCbRef, mouseMoveCbRef) => {
        document.removeEventListener('mousemove', mouseMoveCbRef);
        document.removeEventListener('mouseup', mouseUpCbRef);
    }

    const handleResizeMouseMove = (event, index) => {
        const delta = event.clientX - resizeState.current.lastClientX;

        let width = colWidths[index] === '1fr' ? getRef(index).getBoundingClientRect().width : parseInt(colWidths[index].replace('px', ''));
        let newWidth = width + delta;

        if (newWidth > 800) {
            newWidth = 800;
        } else if (newWidth < 200) {
            newWidth = 200;
        }

        let newColWidths = [...colWidths];
        colWidths[index] = newWidth + 'px';
        setColWidths(newColWidths);

        console.log('resizing: ', width, newWidth, delta, 'currentX:', event.clientX, 'lastX:', resizeState.current.lastClientX);

        resizeState.current.lastClientX = event.clientX;
    }

    const handleRowClick = (event, index) => {
        if (props.onRowClick) {
            props.onRowClick(index);
        }
    }

    return (
        <>
            <Header style={ {gridTemplateColumns: colWidths ? colWidths.join(' ') : 'auto' } }>
                {
                    props.data.head.map( ( col, index ) => {
                        return (
                            <HeaderCell 
                             key={index}
                             ref={ (ref) => headerRefs.current[index] = ref }>    
                                { col }
                                <span onMouseDown={ (event) => handleResizeMouseDown(event, index) }></span>
                            </HeaderCell>
                        );
                    } )
                }
            </Header>
            <Body>
                {
                    props.data.body.map( ( row, index ) => {
                        return (
                            <Row
                             key={ index } 
                             onClick={ (event) => handleRowClick(event, index) }
                             style={ { gridTemplateColumns: colWidths ? colWidths.join(' ') : 'auto' } }>
                                {
                                    row.map( ( data, index ) => <p key={ index }>{ data }</p> )
                                }
                            </Row>
                        );
                    } )
                }
            </Body>
        </>
    );
}

export default Table;