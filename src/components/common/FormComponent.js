
import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Text from './Text';
import Select from './Select';
import Checkbox from './Checkbox';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    width: 100%;
    padding: 5px 0;
`;

const Label = styled.label`
    font-size: 12pt;
    font-weight: 300;
`;

const Description = styled.p`
    font-size: 8pt;
    font-weight: 200;
`;

export default function FormComponent({ form, definition }) {
    const formState = form.state ? form.state[definition.name] : null;

    const renderFormComponent = () => {
        switch (definition.element) {
            case 'input':
                return renderInput();
            case 'text':
                return renderText();
            case 'checkbox':
                return renderCheckbox();
            case 'select':
                return renderSelect();
            default:
                return null;
        }
    }

    const renderInput = () => {
        return (
            <Input 
             fluid
             onChange={ (v) => form.handleChange(definition.name, v) }
             value={ form.values[definition.name] }
             formState={ formState }
            />
        );
    }

    const renderText = () => {
        return (
            <Text 
             onChange={ (v) => form.handleChange(definition.name, v) }
             value={ form.values[definition.name] }
             options={ definition.options }
             formState={ formState }
            />
        );
    }

    const renderCheckbox = () => {
        return (
            <Checkbox />
        );
    }

    const renderSelect = () => {
        return (
            <Select 
             onChange={ (v) => form.handleChange(definition.name, v) }
             value={ form.values[definition.name] }
             options={ definition.options }
             formState={ formState }
            />
        );
    }

    return (
        <Wrapper>
            <Label>{ definition.label }</Label>
            <Description>{ definition.description }</Description>
            { renderFormComponent() }
        </Wrapper>
    ); 
}