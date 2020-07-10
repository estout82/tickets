
/**
 * summary: a component with adjustable size and position
 *  - setup grid in parent component
 *  - this is a dumb component
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    grid-column: ${ props => props.pos.col + ' / ' + (props.pos.col + props.size.width) };
    grid-row: ${ props => props.pos.row + ' / ' + (props.pos.row + props.size.height) };
    border-radius: ${props => props.theme.smallRound};
    box-shadow: ${ props => props.theme.largeShadow };
`;

const Card  = function (props) {
    console.log(props.pos.col + ' / ' + props.pos.col + props.size.width);
    console.log(props.pos.row + ' / ' + props.pos.row + props.size.height);

    return (
        <Wrapper size={props.size} pos={props.pos}>
            {props.children}
        </Wrapper>
    );
}

export default Card;