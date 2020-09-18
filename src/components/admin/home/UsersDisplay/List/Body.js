
import React from 'react';
import Row from './Row';
import useLoading from '../../../../common/hooks/useLoading';

const Body = ({ data, onRowClick }) => {
    const render = useLoading();

    const handleRowClick = (index) => {
        if (onRowClick) {
            onRowClick(index);
        }
    }

    const renderDoneState = () => {
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
                                organizationName: user.organization ? user.organization.name : null,
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

    return render(renderDoneState, { status: data.status });
}

export default Body;