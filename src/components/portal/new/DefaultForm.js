
import React from 'react';
import Input from '../../common/Input';
import Text from '../../common/Text';
import styled from 'styled-components';

const FormElementWrapper = styled.div`
    padding: 5px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    p {
        font-size: 10pt;
        font-weight: 300;
    }
`;

export default function DefaultForm({ form }) {
    return (
        <>
            <FormElementWrapper>
                <p>Title</p>
                <Input fluid />
            </FormElementWrapper>
            <FormElementWrapper>
                <p>Description</p>
                <Text />
            </FormElementWrapper>
        </>
    )
}