
import React from 'react';
import styled from 'styled-components';
import useForm from '../../common/hooks/useForm';
import DefaultForm from './DefaultForm';
import Button from '../../common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 90%;
`;

const ControlsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;
`;

export default function TicketForm({ formDefinition }) {
    const form = useForm(formDefinition);

    const handleSubmitButtonClick = () => {
        
    }

    return (
        <Wrapper>
            {
                formDefinition ?
                Object.keys(formDefinition).map(key => {
                    const formElementDefinition = formDefinition(key);
                    
                    return 'hi';
                }) :
                <DefaultForm form={ form }/>
            }
            <ControlsWrapper>
                <Button onClick={ handleSubmitButtonClick }>Submit</Button>
            </ControlsWrapper>
        </Wrapper>
    );
}