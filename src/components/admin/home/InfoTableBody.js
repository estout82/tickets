
import React, { useCallback } from 'react';
import InfoTableRow from './InfoTableRow';
import useLoading from '../../common/hooks/useLoading';

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
                    })
                }
            </>
        );
    }

    return renderWhenLoaded(render);
}

export default InfoTableBody;