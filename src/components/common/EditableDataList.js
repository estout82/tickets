
/*
 * props:
 *  {
 *      data: { key: value }
 *      format: { type: 'input|select|checkbox', label '', editable: true|false, options: [] }
 *      message: { type: 'ok|error', msg: '' }
 *      onChange (key newValue) =>
 *      onDelete: (key) => 
 *      onPatch: (key, nweValue) => 
 *  }
 */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from './Button'
import EditIcon from './edit.svg';
import EditableDataListFormComponent from './EditableDataListFormComponent';

const Wrapper = styled.div`
    
`;

const Row = styled.div`
    min-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 5px 0;
    font-size: 10pt;

    span {
        padding-right: 10px;
        font-weight: 600;
    }

    &:hover {
        cursor: default;
    }

    img {
        width: 15px;
        height: 15px;
        cursor: pointer;
        margin-left: 10px;
        filter: opacity(.3);
    }
`;

const Message = styled.p`
    font-size: 10pt;
    padding: 3px 10px;
    border-radius: 5px;
    background: ${ props => {
        switch (props.type) {
            case 'ok':
                return props.theme.okColorOne;
            case 'err':
                return props.theme.errorColorOne;
            default:
                return 'none';
        }
    }}
`;

const NONE = -1;

const EditableDataList = ({ data, format, message, onChange, onDelete, onPatch }) => {
    const [hoveringRow, setHoveringRow] = useState(NONE);
    const [editingRow, setEditingRow] = useState(NONE);
    const rowValueBeforeEdit = useRef(null);

    const handleEditButtonClick = (key) => {
        setEditingRow(key);
        rowValueBeforeEdit.current = data[key];
    }

    const handleRowValueChange = (newValue) => {
        onChange(editingRow, newValue);
    }

    const handleSaveButtonClick = () => {
        // TODO: validate data and send to server
        let newDataForPatch = {};
        newDataForPatch[editingRow] = data[editingRow];
        onPatch(newDataForPatch);
        rowValueBeforeEdit.current = data[editingRow];
        setEditingRow(NONE);
    }

    const handleCancelButtonClick = () => {
        // call on change to set state in parent to prev state
        onChange(editingRow, rowValueBeforeEdit.current)
        rowValueBeforeEdit.current = null;
        setEditingRow(NONE);
    }

    const handleRowMouseEnter = (key) => {
        setHoveringRow(key);
    }

    const handleRowMouseLeave = (key) => {
        setHoveringRow(NONE);
    }

    return (
        <Wrapper>
            { 
                message ? 
                <Message type={ message.type }>
                    { message.msg }
                </Message> :
                null
            }
            {
                Object.keys(format).map((key) => {
                    const isRowEditing = editingRow === key;
                    const isRowHovering = hoveringRow === key;
                    const rowValue = data[key];
                    const rowFormat = format[key];

                    return (
                        <Row 
                         key={ key } 
                         onMouseEnter={ () => handleRowMouseEnter(key) }
                         onMouseLeave={ () => handleRowMouseLeave(key) }>
                            <span>{ rowFormat.label + ': ' }</span>
                            {
                                isRowEditing ?
                                <>
                                    <EditableDataListFormComponent 
                                     value={ rowValue }
                                     format={ rowFormat }
                                     onChange={ handleRowValueChange }  
                                    />
                                    <Button minimal onClick={ handleSaveButtonClick } >Save</Button>
                                    <Button minimal onClick={ handleCancelButtonClick } >Cancel</Button>
                                </> :
                                data[key]
                            }
                            {
                                isRowHovering && editingRow === NONE && rowFormat.editable === true ? 
                                <img 
                                 onClick={ () => handleEditButtonClick(key) } 
                                 src={ EditIcon } 
                                 alt="edit"
                                /> : 
                                null
                            }
                        </Row>
                    );
                } )
            }
        </Wrapper>
    );
}

export default EditableDataList;