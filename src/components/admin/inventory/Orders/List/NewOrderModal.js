
import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../common/Modal';
import Button from '../../../../common/Button';
import useEditableForm from '../../../../common/hooks/useEditableForm';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 55px);
    padding: 0 10px;
    display: grid;
    grid-template-rows: 1fr 30px;
`;

export default function NewOrderModal({ onClose }) {
    const form = useEditableForm({
        items: {
            value: []
        }
    });

    const handleClose = () => {
        if (onClose) onClose();
    }

    return (
        <Modal
         size={{width: '500px', height: '300px'}}
         onClose={ handleClose }>
            <Wrapper>
                <div>
                    
                </div>
                <div>
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </div>
            </Wrapper>
        </Modal>
    );
}