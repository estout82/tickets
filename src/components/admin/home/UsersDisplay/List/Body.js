
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
                    data ? data.users.map((user, index) => {
                        // calculate counts from array based parameters
                        const ticketCount = user.tickets ? user.tickets.length : 0;
                        const assetCount = user.assets ? user.assets.length : 0;
                        const itemCount = user.items ? user.items.length : 0;
                        const onLoanCount = user.onLoanItems ? user.onLoanItems.count : 0;

                        return (
                            <Row 
                             key={ user.firstName + user.lastName }
                             data={{
                                name: user.firstName + ' ' + user.lastName,
                                organizationName: user.organization.name,
                                tags: user.tags,
                                department: user.department,
                                ticketCount: ticketCount,
                                assetCount: assetCount,
                                itemCount: itemCount,
                                onLoanCount: onLoanCount
                             }}
                             onClick={ () => handleRowClick(index) }
                            />
                        );
                    }) : 'No users'
                }
            </>
        );
    }

    return renderWhenLoaded(render);
}

export default InfoTableBody;