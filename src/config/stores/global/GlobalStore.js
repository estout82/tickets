
import React, { useEffect, createContext, useReducer, useState } from 'react';
import organizationReducer, { actions as organizationActions }
    from './reducers/organizationReducer';
import departmentReducer, { actions as departmentActions }
    from './reducers/departmentReducer';

export const context = createContext();

const GlobalStore = (props) => {
    const [status, setStatus] = useState('loading');
    const [organizations, organizationDispatch] = 
        useReducer(organizationReducer, { status: 'loading' });
    const [departments, departmentDispatch] = 
        useReducer(departmentReducer, { status: 'loading' });
    
    // fetch all data when component mounts
    useEffect(() => {
        organizationDispatch({
            type: organizationActions.FETCH_START,
            payload: {
                dispatch: organizationDispatch
            }
        });

        departmentDispatch({
            type: departmentActions.FETCH_START,
            payload: {
                dispatch: departmentDispatch
            }
        });
    }, []);

    // re-compute status on every render
    useEffect(() => {
        if (organizations.status !== 'done') return;
        if (departments.status !== 'done') return;

        // if we are here, then all required data is loaded
        setStatus('done');
    }, [organizations.status, departments.status]);

    const value = {
        status: status,
        organizations: organizations,
        departments: departments
    }

    return (
        <context.Provider value={ value }>
            { props.children }
        </context.Provider>
    );
}

export default GlobalStore;