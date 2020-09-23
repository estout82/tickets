
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../common/Button';
import Input from '../../../../common/Input';
import ExButton from '../../../../common/ExButton';
import useEditableForm from '../../../../common/hooks/useEditableForm';
import useUpdateOrder from '../../../../../config/stores/order/useUpdateOrder';
import PillLabel from '../../../../common/PillLabel';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr .75fr;
    font-size: 12pt;
`;

const FieldWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & >:hover {
        cursor: pointer;
    }
`;

const ControlsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;

const OrderItemEditableForm = ({ data, orderId, itemIndex, onItemDelete }) => {
    const [editingField, setEditingField] = useState();
    const updateOrder = useUpdateOrder();
    const form = useEditableForm({
        quantity: {
            label: 'Quantity',
            value: data.quantity
        },
        source: {
            label: 'Source',
            value: data.source
        }
    });
    
    const handleFieldClick = (field) => {
        setEditingField(c => field);
    }

    const handleSaveButtonClick = () => {
        // holds the data for reequest body
        let requestData = { 
            items: {}
        };

        requestData.items[itemIndex] = {
            quantity: form.values.quantity.value,
            source: form.values.source.value
        };

        // preform actual request
        form.handleSubmit(() => {
            // return the promise that is returned by updateOrder.do
            setEditingField();
            return updateOrder.do(orderId, requestData);
        });
    }

    const handleCancelButtonClick = () => {
        form.doReset();
        setEditingField();
    }

    const handleDeleteButtonClick = () => {
        if (onItemDelete) onItemDelete(orderId, itemIndex);
    }

    return (
        <Wrapper>
            <FieldWrapper>{data.item.name}</FieldWrapper>
            <FieldWrapper onClick={() => handleFieldClick('quantity')}>
                {
                    editingField === 'quantity' ?
                    <Input 
                     value={form.values.quantity.value}
                     onChange={(v) => form.handleChange('quantity', v) }
                    /> :
                    <p>{form.values.quantity.value}</p>
                }
            </FieldWrapper>
            <FieldWrapper>
                <p>{data.source}</p>
            </FieldWrapper>
            <ControlsWrapper>
                {
                    editingField ?
                    <>
                        <Button
                         minimal
                         onClick={handleSaveButtonClick}>
                            Save
                        </Button>
                        <Button 
                         minimal
                         onClick={handleCancelButtonClick}>
                            Cancel
                        </Button>
                    </> :
                    <>
                        { 
                            form.status ? 
                            <PillLabel
                             appearence={form.status.msg.appearance}>
                                {form.status.msg.text}
                            </PillLabel> :
                            null
                        }
                        <ExButton onClick={handleDeleteButtonClick}/>
                    </>
                }
            </ControlsWrapper>
        </Wrapper>
    );
}

export default OrderItemEditableForm;