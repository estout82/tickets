
import React from 'react';
import styled from 'styled-components';
import useGlobalStoreContext from '../../../../config/stores/global/useGlobalStoreContext';
import useEditableForm from '../../../common/hooks/useEditableForm';
import Select from '../../../common/Select';

const Wrapper = styled.div`
    min-width: 200px;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;

    p {
        font-size: 10pt;
    }
`;

export default function InfoCard({ data, updateTicket }) {
    const global = useGlobalStoreContext();
    const form = useEditableForm({
        status: {
            value: data.status._id
        },
        category: {
            value: data.category._id
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