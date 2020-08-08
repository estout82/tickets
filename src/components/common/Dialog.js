
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 10px 10px 10px;
    z-index: 100;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowwrap;
    padding-bottom: 10px;
`;

const Dialog = (props) => {
    const handleOkClick = () => {
        if ( props.onOk ) {
            props.onOk();
        }
    }

    const handleCancelClick = () => {
        if ( props.onCancel ) {
            props.onCancel();
        }
    }

    return (
        <Modal
         size={ { width: '400px', height: 'fit-content' } }
         onClose={ handleCancelClick }>
            <Wrapper>
                <Row>
                    { props.message }
                </Row>
                <Row>
                    <Button
                     onClick={ handleOkClick }>
                        Ok
                    </Button>
                    <Button
                     onClick={ handleCancelClick }>
                        Cancel
                    </Button>
                </Row>
            </Wrapper>
        </Modal>
    );
}

export default Dialog;