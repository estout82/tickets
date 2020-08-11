
import React from 'react';
import styled from 'styled-components';
import InfoTableRow from './InfoTableRow';

const Wrapper = styled.div`
`;

const InfoTableBody = (props) => {
    const handleRowClick = (index) => {
        if (props.onRowClick) {
            props.onRowClick(index);
        }
    }

    return (
        <Wrapper>
            {
                props.data.map( ( row, index ) => {
                    return (
                        <InfoTableRow 
                         key={ row.name }
                         name={ row.name }
                         organization={ row.organization }
                         tags={ row.tags }
                         department={ row.department }
                         openTickets={ row.openTickets }
                         assetCount={ row.assetCount }
                         itemCount={ row.itemCount }
                         onLoanCount={ row.onLoanCount }
                         onClick={ () => handleRowClick(index) }
                        />
                    );
                } )
            }
        </Wrapper>
    );
}

export default InfoTableBody;