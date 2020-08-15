
import React from 'react';
import styled from 'styled-components';
import InfoTableRow from './InfoTableRow';
import useLoadingText from '../../../config/hooks/useLoadingText';

const LoadingWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    color: ${ props => props.theme.highlightColorOne }
`; 

const InfoTableBody = (props) => {
    const loadingText = useLoadingText(props.data.status !== 'loading');

    const handleRowClick = (index) => {
        if (props.onRowClick) {
            props.onRowClick(index);
        }
    }

    return (
        <>
            {
                props.data.status === 'loading' ?
                <LoadingWrapper>{ loadingText }</LoadingWrapper> :
                Object.keys(props.data.users).map((key, index) => {
                    // extract actual data from page references to user cache
                    const row = props.data.users[key].data;

                    return (
                        <InfoTableRow 
                         key={ row.firstName + row.lastName }
                         name={ row.firstName + ' ' + row.lastName }
                         organization={ row.organization }
                         tags={ row.tags }
                         department={ row.department }
                         openTicketCount={ row.openTicketCount }
                         assetCount={ row.assetCount }
                         itemCount={ row.itemCount }
                         onLoanCount={ row.onLoanCount }
                         onClick={ () => handleRowClick(index) }
                        />
                    );
                } )
            }
        </>
    );
}

export default InfoTableBody;