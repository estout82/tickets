
import React, { createContext, useReducer, useEffect } from 'react';
import pageReducer, { actions as pageActions } from './pagesReducer';
import singleReducer from './singleReducer';
import metaReducer, { actions as metaActions } from './metaReducer';

export const context = createContext();

const UserStore = ({ children }) => {
    const [pages, pagesDispatch] = useReducer(pageReducer, { status: 'loading' });
    const [single, singleDispatch] = useReducer(singleReducer, { status: 'loading' });
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

    const getPage = (page) => {
        if (!pages[page]) {
            pagesDispatch({
                type: pageActions.FETCH_SINGLE_START,
                payload: {
                    page: page,
                    dispatch: pagesDispatch
                }
            });
            return { status: 'loading' };
        }

        return pages[page];
    }

    const value = {
        status: meta.status,
        meta: meta.data,
        pages: pages,
        getPage: getPage,
        single: single
    }

    return (
        <context.Provider value={ value }>
            { children }
        </context.Provider>
    );
}

export default UserStore;