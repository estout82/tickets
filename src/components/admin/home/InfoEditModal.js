
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';
import useForm from '../../../config/hooks/useForm';
import EditableDataList from '../../common/EditableDataList';
import useOrganizationsAsOptions 
    from '../../../config/stores/global/hooks/useOrganizationsAsOptions';
import useDepartmentsAsOptions 
    from '../../../config/stores/global/hooks/useDepartmentsAsOptions';
import usePatchUser from '../../../config/stores/user/hooks/usePatchUser';
import Accordian from '../../common/Accordian';
import Button from '../../common/Button';
import InfoEditModalTickets from './InfoEditModalTickets';

const Wrapper = styled.div`
    display: column;
    flex-flow: row nowrap;
    padding: 0 10px 10px 10px;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;

    padding-bottom: 10px;
`;

const InfoEditModal = ({ data, onClose }) => {
    const [message, setMessage] = useState();
    const [formValues, handleChange] = useForm(data);
    const organizationOptions = useOrganizationsAsOptions();
    const departmentOptions = useDepartmentsAsOptions();
    const patchUser = usePatchUser();

    const format = {
        firstName: { 
            type: 'input', 
            label: 'First Name', 
            editable: true 
        }, lastName: { 
            type: 'input', 
            label: 'Last Name', 
            editable: false 
        }, organization: { 
            type: 'select', 
            label: 'Organization', 
            options: organizationOptions,
            editable: true 
        }, tags: { 
            type: 'input', 
            label: 'Tags', 
            editable: true 
        }, department: { type: 
            'select', 
            label: 'Department', 
            editable: true,
            options: departmentOptions
        }
    }

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const handlePatchComplete = () => {
        setMessage({ type: 'ok', msg: 'Holy shit it worked!' });

        // reset message after 10 seconds
        setTimeout(() => {
            setMessage();
        }, 5000);
    }

    const handlePatch = (newData) => {
        patchUser(data.id, newData, handlePatchComplete);
    }

    return (
        <Modal
         size={ {width: 'fit-content', height: 'fit-content'} }
         title={ data.firstName + ' ' + data.lastName }
         onClose={ handleClose }>
            <Wrapper>
                <EditableDataList
                data={ formValues }
                onChange={ handleChange }
                onPatch={ handlePatch }
                format={ format }
                message={ message } 
                />
                <Row>
                    <InfoEditModalTickets 
                     ticketIds={ data.openTickets }
                    />
                </Row>
                <Row>
                    <Accordian
                     title="Items"
                     isExpanded={ true }>
                        items
                    </Accordian>
                </Row>
                <Row>
                    <Accordian
                     title="Assets"
                     isExpanded={ true }>
                        assets
                    </Accordian>
                </Row>
                <Row>
                    <Button>Deactivate Account</Button>
                    <Button>Revolk Licenses</Button>
                </Row>
            </Wrapper>
        </Modal>
    );
}

export default InfoEditModal;