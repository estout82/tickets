
import React, { createContext } from 'react';
import useDepartments from './useDepartments';
import useOrganizations from './useOrganizations';
import useMeta from '../meta/useMeta';
import useTicketCategories from './useTicketCategories';
import useTicketStatuses from './useTicketStatuses';

export let context = createContext();

export function Provider({ children }) {
    const departments = useDepartments();
    const organizations = useOrganizations();
    const ticketCategories = useTicketCategories();
    const ticketStatuses = useTicketStatuses();
    const meta = useMeta();

    // function that gets a single status from the statuses of all hooks
    const getStatusText = () => {
        // if any reequests are not done, return that status
        if (departments.status.text !== 'done') return departments.status.text;
        else if (organizations.status.text !== 'done') return organizations.status.text;
        else if (ticketCategories.status.text !== 'done') return ticketCategories.status.text;
        else if (ticketStatuses.status.text !== 'done') return ticketStatuses.status.text;
        else if (meta.status.text !== 'done') return meta.status.text;

        // if we ar here, all statses are done
        return 'done';
    }

    // context value
    const value = {
        status: { text: getStatusText() },
        departments,
        organizations,
        ticket: {
            statuses: ticketStatuses,
            categories: ticketCategories,
        },
        meta
    }

    return (
        <context.Provider value={value}>
            { children }
        </context.Provider>
    )
}