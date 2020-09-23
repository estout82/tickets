
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    height: 60px;
    color: ${ props => props.theme.textColorOne };
    font-size: 10pt;
    font-weight: 300;

    :hover {
        background: ${ props => props.theme.backgroundColorThree };
        cursor: pointer;
    }
`;

const ListRow = ({ data, onClick }) => {

    const handleClick = () => {
        if (onClick) onClick();
    }

    return (
        <Wrapper onClick={handleClick}>
        </Wrapper>
    );
}

export default ListRow;