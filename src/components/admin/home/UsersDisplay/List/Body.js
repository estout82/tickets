
import React, { useCallback } from 'react';
import Row from './Row';
import useLoading from '../../../../common/hooks/useLoading';

const InfoTableBody = ({ data, onRowClick }) => {
    const renderWhenLoaded = useLoading(useCallback(() => {
        if (data.status !== 'done') return true;
        return false;
    }, [data.status]));

    const handleRowClick = (index) => {
        if (onRowClick) {
            onRowClick(index);
        }
    }

    const render = () => {
        return (
            <>
                {
                    Object.keys(data.users).map((key, index) => {
                        // extract actual data from page references to user cache
                        const row = data.users[key].data;

                        // calculate counts from array based parameters
                        const openTicketCount = row.openTickets ? row.openTickets.length : 0;
                        const assetCount = row.assets ? row.assets.length : 0;
                        const itemCount = row.items ? row.items.length : 0;
                        const onLoanCount = row.onLoanItems ? row.onLoanItems.count : 0;

                        return (
                            <Row 
                             key={ row.firstName + row.lastName }
                             name={ row.firstName + ' ' + row.lastName }
                             organization={ row.organization }
                             tags={ row.tags }
                             department={ row.department }
                             openTicketCount={ openTicketCount }
                             assetCount={ assetCount }
                             itemCount={ itemCount }
                             onLoanCount={ onLoanCount }
                             onClick={ () => handleRowClick(index) }
                            />
                        );
                    })
                }
            </>
        );
    }

    return renderWhenLoaded(render);
}

export default InfoTableBody;