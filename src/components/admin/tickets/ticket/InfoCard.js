
import React from 'react';
import styled from 'styled-components';
import useGlobalStoreContext from '../../../../config/stores/global/useGlobalStoreContext';
import useEditableForm from '../../../common/hooks/useEditableForm';
import Select from '../../../common/Select';

const Wrapper = styled.div`
    min-width: 200px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    display: flex;
    flex-flow: column nowrap;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export default function InfoCard({ data, updateTicket }) {
    const global = useGlobalStoreContext();
    const form = useEditableForm({
        status: {
            value: data.status
        },
        category: {
            value: data.category
        }
    });

    const handleStatusChange = (val) => {
        form.handleChangeAndSubmit('status', val, () => {
            return updateTicket({ status: val });
        });
    }

    return (
        <Wrapper>
            <Row>
                <Select 
                 value={ form.values.status.value }
                 options={ global.ticket.statuses.asOptions() }
                 onChange={ handleStatusChange }
                 formState={ form.values.status }
                />
                <Select
                 value={ form.values.category.value }
                 options={ global.ticket.categories.asOptions() }
                 onChange={ (val) => form.handleChange('category', val) }
                />
            </Row>
            <Row>
                {
                    data.customInfo ? 
                    data.customInfo.map(info => {
                        return (
                            <>
                                Custom Info!
                            </>
                        )
                    }) :
                    null
                }
            </Row>
    </Wrapper>
    );
}