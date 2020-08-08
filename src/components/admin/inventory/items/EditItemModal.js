
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Modal from '../../../common/Modal';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import Select from '../../../common/Select';
import EditIcon from './edit.svg';
import Dialog from '../../../common/Dialog'

const Wrapper = styled.div`
    padding: 0 10px 10px 10px;
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
        content: 'l';
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
    } }
`;

const EditItemModal = (props) => {
    const NOT_EDITING = -1;
    const NOT_HOVERING = -1;

    const FORM_TYPE_TEXT = 'text';
    const FORM_TYPE_SELECT = 'select';

    const [data, setData] = useState([
        { field: 'name', label: 'Name', value: 'USB-C to HDMI Adapter', type: 'text' },
        { field: 'category', label: 'Category', value: 'Adapter', type: 'select',
          options: [ 
            'Cable',
            'Adapter',
            'Storage'
          ] }
    ]);

    const [message, setMessage] = useState(null);

    const rowValueBeforeEdit = useRef(null);

    const [hoveringRow, setHoveringRow] = useState(-1);
    const [editingRow, setEditingRow] = useState(-1);

    const [dialog, setDialog] = useState(null);

    const handleEditButtonClick = (index) => {
        setEditingRow(index);
        rowValueBeforeEdit.current = data[index].value;
    }

    const handleRowValueChange = (newValue, rowIndex) => {
        let newData = [...data];
        newData[rowIndex].value = newValue;
        setData(newData);
    }

    const handleSaveButtonClick = () => {
        // TODO: validate data and send to server
        rowValueBeforeEdit.current = data[editingRow].value;
        setEditingRow(NOT_EDITING);

        // set status message 
        setMessage({ type: 'ok', msg: 'Changes saved sucessfully' });

        // add a timeout so message can dissapear after 5 seconds
        setTimeout(() => setMessage(null), 5000);
    }

    const handleCancelButtonClick = () => {
        // TODO: revert to previous input state
        let newData = [...data];
        data[editingRow].value = rowValueBeforeEdit.current;
        setData(newData);
        setEditingRow(NOT_EDITING);
        rowValueBeforeEdit.current = null;
    }

    const handleDeleteClick = () => {
        const onOk = () => {
            // TODO: push a request to handle the delete
            let newData = [
                ...data.splice(0, editingRow),
                ...data.splice(editingRow + 1)
            ];
            setData( newData );
            setMessage( { type: 'ok', msg: 'Sucessfully deleted item' } );
            setTimeout( () => setMessage(null), 5000 );
            setDialog(null);
        }

        const onCancel = () => {
            setDialog(null);
        }

        setDialog({ 
            message: 'Are you sure you want to delete this item?',
            onOk: onOk,
            onCancel: onCancel
        });
    }

    const renderEditingFormComponent = ( row, index ) => {
        switch (row.type) {
            case FORM_TYPE_TEXT:
                return (
                    <Input
                    minimal
                    value={ row.value }
                    onChange={ newValue => handleRowValueChange( newValue, index ) }
                    />
                );
            case FORM_TYPE_SELECT:
                return (
                    <Select
                     value={ row.value } 
                     options={ row.options }
                     onChange={ newValue => handleRowValueChange( newValue, index ) }
                    />
                );
            default: 
                return null;
        }     
    }

    return (
        <>
            <Modal 
            size={ { width: '500px', height: 'fit-contentdddddd' } }
            title="Edit Item"
            message={ { type: 'ok', msg: 'Changes saved sucessfully' } }
            onClose={ props.onClose }>
                <Wrapper>
                    { message ? 
                        <Message type={ message.type ? message.type : 'ok' }>
                            { message.msg }
                        </Message> :
                        null 
                    }
                    {
                        data.map( ( row, index ) => {
                            const isRowEditing = editingRow === index;
                            const isRowHovering = hoveringRow === index;

                            return (
                                <Row 
                                onMouseEnter={ 
                                    editingRow === NOT_EDITING ?
                                    () => setHoveringRow(index) :
                                    null }
                                onMouseLeave={ 
                                    editingRow === NOT_EDITING ?
                                    () => setHoveringRow(NOT_HOVERING) :
                                    null  }>
                                    <span>{ row.label + ': ' }</span>
                                    {
                                        isRowEditing ?
                                        <>
                                            { renderEditingFormComponent(row, index) }
                                            <Button minimal onClick={ handleSaveButtonClick } >Save</Button>
                                            <Button minimal onClick={ handleCancelButtonClick } >Cancel</Button>
                                        </>:
                                        row.value
                                    }
                                    {
                                        isRowHovering && !isRowEditing ? 
                                        <img 
                                        onClick={ () => handleEditButtonClick(index) } 
                                        src={ EditIcon } 
                                        alt="edit"
                                        /> : 
                                        null
                                    }
                                </Row>
                            );
                        } )
                    }
                    <Row>
                        <Button
                        onClick={ handleDeleteClick }>
                            Delete
                        </Button>
                    </Row>
                </Wrapper>
            </Modal>
            { dialog ? <Dialog { ...dialog }/> : null }
        </>
    );
}

export default EditItemModal;