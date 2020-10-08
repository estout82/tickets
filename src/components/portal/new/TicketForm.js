
import React from 'react';
import styled from 'styled-components';
import useForm from '../../common/hooks/useForm';
import Button from '../../common/Button';
import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Select from '../../common/Select';
import Text from '../../common/Text';
import useCreateTicket from '../../../config/stores/tickets/useCreateTicket';

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

const FormFieldWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    width: 100%;
    padding: 5px 0;
`;

const FieldLabel = styled.label`
    font-size: 12pt;
    font-weight: 300;
`;

const FieldDescription = styled.p`
    font-size: 8pt;
    font-weight: 200;
`;

export default function TicketForm({ formDefinition, categoryId }) {
    const realFormDefinition = formDefinition ? {
        ...formDefinition.fields,
        title: {
            name: 'title'
        }
    } : {
        title: {
            name: 'title',
            label: 'Title',
            description: 'A brief summary of your issue',
            element: 'input'
        },
        description: {
            name: 'description',
            label: 'Description',
            description: 'A detailed description of your issue',
            element: 'text'
        }
    };

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
    }

    return (
        <Wrapper>
            {
                Object.keys(realFormDefinition).map(key => {
                    const field = realFormDefinition[key];
                    
                    switch (field.element) {
                        case 'input':
                            return (
                                <FormFieldWrapper key={field._id}>
                                    <FieldLabel>{ field.label }</FieldLabel>
                                    <FieldDescription>{ field.description }</FieldDescription>
                                    <Input
                                     fluid
                                     onChange={ (v) => form.handleChange(field.name, v) }
                                     value={ form.values[field.name] }
                                    />
                                </FormFieldWrapper>
                            );
                        case 'select':
                            return (
                                <FormFieldWrapper key={ field._id }>
                                    <FieldLabel>{ field.label }</FieldLabel>
                                    <FieldDescription>{ field.description }</FieldDescription>
                                    <Select
                                     onChange={ (v) => form.handleChange(field.name, v) }
                                     value={ form.values[field.name] }
                                     options={ field.options }
                                    />
                                </FormFieldWrapper>
                            );
                        case 'checkbox':
                            return (
                                <FormFieldWrapper>
                                    <FieldLabel>{ field.label }</FieldLabel>
                                    <FieldDescription>{ field.description }</FieldDescription>
                                    <Checkbox 
                                     onChange={ (v) => form.handleChange(field.name, v) }
                                     value={ form.values[field.name] }
                                    />
                                </FormFieldWrapper>
                            );
                        case 'text':
                            return (
                                <FormFieldWrapper key={ field._id }>
                                    <FieldLabel>{ field.label }</FieldLabel>
                                    <FieldDescription>{ field.description }</FieldDescription>
                                    <Text
                                     onChange={ (v) => form.handleChange(field.name, v) }
                                     value={ form.values[field.name] }
                                     options={ field.options }
                                    />
                                </FormFieldWrapper>
                            );
                        default:
                            return null;
                    }
                })
            }
            <ControlsWrapper>
                <Button onClick={ handleSubmitButtonClick }>Submit</Button>
            </ControlsWrapper>
        </Wrapper>
    );
}