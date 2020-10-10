
import React from 'react';
import styled from 'styled-components';
import useForm from '../../common/hooks/useForm';
import Button from '../../common/Button';
import FormComponent from '../../common/FormComponent';
import useCreateTicket from '../../../config/stores/tickets/useCreateTicket';
import useGenFormFieldsFromFormDefinition from '../../common/hooks/useGenFormFieldsFromFormDefinition';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 90%;
`;

const ControlsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 0;
`;

const defaultFormDefinition = {
    title: {
        name: 'title',
        label: 'Title',
        description: 'A brief summary of your issue',
        element: 'input',
        validator: (v) => {
            return v !== '' && v !== null ?
                true :
                { text: 'Please enter a title', appearance: 'error' }
        }
    },
    description: {
        name: 'description',
        label: 'Description',
        description: 'A detailed description of your issue',
        element: 'text',
        validator: (v) => {
            return v !== '' && v !== null ?
                true :
                { text: 'Please enter a title', appearance: 'error' }
        }
    }
};

export default function TicketForm({ formDefinition, categoryId, onFormSubmit }) {
    const generateFields = useGenFormFieldsFromFormDefinition(formDefinition);

    const realFormDefinition = formDefinition ? 
    {
        ...generateFields.do(),
        title: {
            name: 'title',
            validator: (v) => {
                return v !== '' && v !== null ?
                    true :
                    { text: 'Please enter a title', appearance: 'error' }
            }
        }
    } : 
    defaultFormDefinition;

    const createTicket = useCreateTicket();
    const form = useForm(realFormDefinition);

    const handleSubmitButtonClick = () => {
        createTicket.do({
            parameters: form.values,
            category: categoryId
        })
        .then(status => {
            console.log(status);
        })
        .catch(status => {
            console.error(status);
        });

        if (onFormSubmit) onFormSubmit();
    }

    return (
        <Wrapper>
            {
                Object.keys(realFormDefinition).map(key => {
                    const definition = realFormDefinition[key];

                    return (
                        <FormComponent
                         key={ definition._id }  
                         definition={ definition }
                         form={ form } 
                        />
                    );
                })
            }
            <ControlsWrapper>
                <Button onClick={ handleSubmitButtonClick }>Submit</Button>
            </ControlsWrapper>
        </Wrapper>
    );
}