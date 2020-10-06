
import React from 'react';
import styled from 'styled-components';
import useForm from '../../common/hooks/useForm';
import DefaultForm from './DefaultForm';
import Button from '../../common/Button';
import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';

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
`;

const FieldLabel = styled.label`
    font-size: 12pt;
    font-weight: 300;
`;

const FieldDescription = styled.p`
    font-size: 8pt;
    font-weight: 200;
`;

const defaultFormDefinition = {
    title: {
        name: 'title'
    },
    description: {
        name: 'description'
    }
}

export default function TicketForm({ formDefinition }) {
    const form = useForm(formDefinition ? formDefinition.fields : defaultFormDefinition);

    const handleSubmitButtonClick = () => {
        
    }

    console.log(form);

    return (
        <Wrapper>
            {
                formDefinition ?
                Object.keys(formDefinition.fields).map(key => {
                    const field = formDefinition.fields[key];
                    
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
                        case 'checkbox':
                            return (
                                <FormFieldWrapper>
                                    <Checkbox />
                                </FormFieldWrapper>
                            );
                        default:
                            return null;
                    }
                }) :
                <DefaultForm form={ form }/>
            }
            <ControlsWrapper>
                <Button onClick={ handleSubmitButtonClick }>Submit</Button>
            </ControlsWrapper>
        </Wrapper>
    );
}