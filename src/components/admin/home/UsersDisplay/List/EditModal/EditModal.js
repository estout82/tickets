
import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../../../../../common/hooks/useForm';
import useOrganizationsAsOptions from '../../../../../../config/stores/global/hooks/useOrganizationsAsOptions';
import useDepartmentsAsOptions from '../../../../../../config/stores/global/hooks/useDepartmentsAsOptions';
import useUpdateUser from '../../../../../../config/stores/user/useUpdateUser';
import Modal from '../../../../../common/Modal';
import EditableDataList from '../../../../../common/EditableDataList';
import Button from '../../../../../common/Button';
import Tickets from './Tickets';
import Items from './Items';
import Assets from './Assets';

const Wrapper = styled.div`
    display: column;
    flex-flow: row nowrap;
    padding: 0 10px 10px 10px;
    min-width: 500px;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 10px;
`;

const InfoModal = ({ data, onClose }) => {
    const [message, setMessage] = useState();
    const [formValues, handleChange] = useForm(data);
    const organizationOptions = useOrganizationsAsOptions();
    const departmentOptions = useDepartmentsAsOptions();
    const updateUser = useUpdateUser(handlePatchComplete);

    const format = {
        firstName: { 
            type: 'input', 
            label: 'First Name', 
            editable: true 
        }, lastName: { 
            type: 'input', 
            label: 'Last Name', 
            editable: false 
        }, organizationName: { 
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

    function setMessageWithTimeout(type, msg) {
        setMessage({ type, msg });
        setTimeout(() => setMessage(), 5000);
    }

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    function handlePatchComplete() {
        setMessageWithTimeout({ type: 'ok', msg: 'Holy shit it worked!' });
    }

    const handleUpdate = (newData) => {
        // if updating organzation, replace it with a field that the API understands
        if (newData.organizationName) {
            let orgId = null;

            Object.keys(organizationOptions).forEach(key => {
                if (newData.organizationName === organizationOptions[key]) {
                    orgId = key;
                }
            });

            if (!orgId) {
                console.error(`error: could not find id of org with name ${newData.organizationName} 
                    while updating user`);
                setMessageWithTimeout('err', 
                    `Error updating organization. Invalid name ${newData.organizationName}`);
                return;
            }

            newData.organization = orgId;
            delete newData.organizationName;
        }

        updateUser(data.id, newData);
    }

    return (
        <Modal
         size={{ width: 'fit-content', height: 'fit-content' }}
         title={ data.firstName + ' ' + data.lastName }
         onClose={ handleClose }>
            <Wrapper>
                <EditableDataList
                 data={ formValues }
                 onChange={ handleChange }
                 onUpdate={ handleUpdate }
                 format={ format }
                 message={ message } 
                />
                <Row>
                    <Tickets 
                     data={{ ticketIds: data.tickets }}
                    />
                </Row>
                <Row>
                    <Items 
                     data={{ itemIds: data.items }}
                    />
                </Row>
                <Row>
                    <Assets 
                     data={{ assetIds: data.assets }}
                    />
                </Row>
                <Row>
                    <Button>Deactivate</Button>
                </Row>
            </Wrapper>
        </Modal>
    );
}

export default InfoModal;