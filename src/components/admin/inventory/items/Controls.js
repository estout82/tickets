
import React from 'react';
import styled from 'styled-components';

import Button from '../../../common/Button';
import Pagenation from '../../../common/Pagenation';
import usePagenation from '../../../common/hooks/usePagenation';

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`;

const Controls = (props) => {
    const {
        currentPage,
        setCurrentPage,
        numPages
    } = usePagenation(5);

    const handleAddItemClick = (event) => {
        if (props.onAddItemClick) {
            props.onAddItemClick(event);
        }
    }

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={ handleAddItemClick }>+</Button>
            </ButtonWrapper>
            <Pagenation 
             currentPage={ currentPage }
             numPages={ numPages }
             onPageChange={ onPageChange }
            />
        </Wrapper>
    );
}

export default Controls;