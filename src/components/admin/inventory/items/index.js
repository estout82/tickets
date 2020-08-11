
import React, { useState } from 'react';
import styled from 'styled-components';
import ItemTable from './ItemTable';
import AddItemModal from './AddItemModal';
import Controls from './Controls';
import EditItemModal from './EditItemModal';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 60px;
    border-radius: 5px;
    box-shadow: ${ props => props.theme.largeShadow };
    font-size: 12pt;
`;

const Items = (props) => {
    const [ addItemModalShown, setAddItemModalShown ] = useState(false);
    const [ editItemModalShown, setEditItemModalShown ] = useState(false);

    const onAddItemModalClose = () => {
        setAddItemModalShown(false);
    }

    const onEditItemModalClose = () => {
        setEditItemModalShown(false);
    }

    return (
        <Wrapper>
            { 
                addItemModalShown ?
                <AddItemModal onClose={ onAddItemModalClose } /> :
                null
            }
            {
                editItemModalShown ? 
                <EditItemModal onClose={ onEditItemModalClose }/> :
                null
            }
            <ItemTable onRowClick={ (event, index) => setEditItemModalShown(true) }/>
            <Controls onAddItemClick={ () => setAddItemModalShown(true) }/>
        </Wrapper>
    );
}

export default Items;