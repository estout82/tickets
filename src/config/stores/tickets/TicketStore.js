
import React, { createContext, useReducer, useEffect } from 'react';
import metaReducer, { actions as metaActions } from './reducers/metaReducer';
import ticketReducer, { actions as ticketActions } from './reducers/ticketReducer';
import { getFromCache } from '../storeUtil';

export const context = createContext();

const TicketStore = ({ children }) => {
    const [meta, metaDispatch] = useReducer(metaReducer, { status: 'loading' });
    const [tickets, ticketDispatch] = useReducer(ticketReducer, { status: 'loading' });

    // fetch all data on component mount
    useEffect(() => {
        metaDispatch({
            type: metaActions.FETCH,
            payload: {
                dispatch: metaDispatch
            }
        });
    }, []);

    const fetchCategories = () => {
        if (meta.status === 'done') {
            return meta.data.categories;
        } else {
            return { status: 'loading' };
        }
    }

    const fetchTicket = (id) => {
        return getFromCache(tickets, id, () => {
            ticketDispatch({
                type: ticketActions.FETCH_SINGLE,
                payload: {
                    dispatch: ticketDispatch,
                    id: id
                }
            });
        });
    }

    const fetchBatch = (ids) => {
        // TODO: look at consolidating the single resuests into a batch request
        // TODO: don't use the get from cache funtion

        ids.forEach(id => {
            // fetch ticket from cache
            getFromCache(tickets, id, () => {
                ticketDispatch({
                    type: ticketActions.FETCH_SINGLE,
                    payload: {
                        dispatch: ticketDispatch,
                        id: id
                    }
                });
            });
        });
    }

    const fetchPage = (page) => {
        // TODO: 
    }

    const getTicket = (id) => {
        return tickets[id];
    }

    const getBatch = (ids) => {
        if (!ids) return;

        let batch = {};

        ids.forEach(id => {
            batch[id] = tickets[id];
        });

        return batch;
    }

    const value = {
        getTicket: getTicket,
        getBatch: getBatch,
        fetchCategories: fetchCategories,
        fetchTicket: fetchTicket,
        fetchBatch: fetchBatch,
        fetchPage: fetchPage
    };

    return (
        <context.Provider value={ value }>
            { children }
        </context.Provider>
    );
}

export default TicketStore;