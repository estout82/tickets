
import React from 'react';
import styled from 'styled-components';
import useForm from '../../common/hooks/useForm';

const Wrapper = styled.div`

`;

export default function TicketForm({ formDefinition }) {
    const form = useForm(formDefinition);

    return (
        <Wrapper>

        </Wrapper>
    );
}