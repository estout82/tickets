
import React, { useEffect, createContext, useReducer, useState } from 'react';
import organizationReducer, { actions as organizationActions } from './organizationReducer';

export const context = createContext();

const GlobalStore = (props) => {
    const [status, setStatus] = useState('loading');
    const [organizations, organizationsDispatch] = 
        useReducer(organizationReducer, { status: 'loading' });
    

    // fetch all data when component mounts
    useEffect(() => {
        organizationsDispatch({
            type: organizationActions.FETCH_START,
            payload: {
                dispatch: organizationsDispatch
            }
        });
    }, []);

    // re-compute status on every render
    useEffect(() => {
        if (organizations.status !== 'done') return;

        // if we are here, then all required data is loaded
        setStatus('done');
    }, [organizations.status]);

    const value = {
        status: status,
        organizations: organizations
    }

    return (
        <context.Provider value={ value }>
            { props.children }
        </context.Provider>
    );
}

export default GlobalStore;