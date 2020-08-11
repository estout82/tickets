
import React from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';

const Wrapper = styled.div`
    padding: 10px;
`;

const Row = styled.div`
    min-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 5px 0;
    font-size: 10pt;

    &:hover {
        cursor: default;
    }
`;

const Label = styled.span`
    padding-right: 10px;
    font-weight: 600;
`;

const EditIcon = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 10px;
    filter: opacity(.3);
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

const InfoModal = (props) => {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    }

    return (
        <Modal
         size={ { width: 'fit-content', height: '200px' } }
         title={ props.data.name }
         onClose={ handleClose }>
            <Wrapper>
                
            </Wrapper>
        </Modal>
    );
}

export default InfoModal;