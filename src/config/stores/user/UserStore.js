
// TODO: re-architect so that all user data is stored in one place

import React, { createContext, useReducer, useEffect } from 'react';
import userReducer, { actions as userActions } from './reducers/userReducer';
import metaReducer, { actions as metaActions } from './reducers/metaReducer';

export const context = createContext();

const UserStore = ({ children }) => {
    const [users, userDispatch] = useReducer(userReducer, { status: 'loading' });
    const [meta, metaDispatch] = useReducer(metaReducer, { status: 'loading' });

    // load meta data
    useEffect(() => {
        metaDispatch({
            type: metaActions.FETCH_START,
            payload: {
                dispatch: metaDispatch
            }
        });


    }, []);

    // gets a page async from API
    const getPage = (page) => {
        if (!users.pages[page]) {
            userDispatch({
                type: userActions.FETCH_PAGE_START,
                payload: {
                    page: page,
                    dispatch: userDispatch
                }
            });

            return { status: 'loading' };
        }

        // if we are here, page is already loaded... return it
        return users.pages[page];
    }

    // gets a user async from API
    const getUser = (id) => {
        // TODO:
    }

    // patches user data async
    const patchUser = (id, newData, onFinish) => {
        // dispatch action

        // pass in id, new data, finish (call when complete to update UI with status of op)

        // return an object with status
        return { status: 'in-progress' };
    }

    const value = {
        // DATA
        status: meta.status,
        meta: meta.data,
        pages: users.pages,
        users: users.data,

        // ACTIONS
        getUser: getUser,
        getPage: getPage,
        patchUser: patchUser
    }

    return (
        <context.Provider value={ value }>
            { children }
        </context.Provider>
    );
}

export default UserStore;