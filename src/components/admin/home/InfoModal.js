
import React from 'react';
import Modal from '../../common/Modal';
import useForm from '../../../config/hooks/useForm';
import EditableDataList from '../../common/EditableDataList';
import useOrganizationsAsOptions 
    from '../../../config/stores/global/hooks/useOrganizationsAsOptions';
import useDepartmentsAsOptions 
    from '../../../config/stores/global/hooks/useDepartmentsAsOptions';

const InfoModal = ({ data, onClose }) => {
    const [ formValues, handleChange ] = useForm(data);
    const organizationOptions = useOrganizationsAsOptions();
    const departmentOptions = useDepartmentsAsOptions();

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

    return (
        <Modal
         size={ { width: 'fit-content', height: 'fit-content' } }
         title={ data.firstName + ' ' + data.lastName }
         onClose={ handleClose }>
            <EditableDataList
             data={ formValues }
             onChange={ handleChange }
             format={ format }
             meessage={ { type: 'ok', msg: 'Test message' } } />
        </Modal>
    );
}

export default InfoModal;