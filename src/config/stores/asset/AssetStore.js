
import React, { createContext, useContext } from 'react';
import useCreateStore from '../useCreateStore';
import { fakeCategoriesResponse } from './fakeResponses';
import { copyState, setInCache, setStatus } from '../util';

const context = createContext();

export const useAssetStore = () => {
    return useContext(context);;
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOAD':
            // fetch fake data
            setTimeout(() => {
                payload.dispatch({
                    type: 'LOAD_DONE',
                    payload: {
                        status: 'ok',
                        response: fakeCategoriesResponse
                    }
                });
            }, 500);

            let stateAfterLoad = copyState(state);
            setStatus(stateAfterLoad, 'loading');

            return stateAfterLoad;
        case 'LOAD_DONE':
            // check for error
            if (payload.status !== 'ok') {
                console.error('load error in asset reducer');
                return setStatus(copyState(state), 'error');
            }

            let stateAfterLoadDone = copyState(state);
            setStatus(stateAfterLoadDone, 'done');
            setInCache(state.cache, 'categories', payload.response.data);
            return stateAfterLoadDone;
        case 'FETCH_ASSET':
            return;
        case 'FETCH_ASSET_DONE':
            return;
        case 'FETCH_PAGE':
            return;
        case 'FETCH_PAGE_DONE':
            return;
        default:
            console.error(`unknown action ${type} in asset store reducer`);
            return state;
    }
}

const actions = {
    GET_CATEGORIES: (store) => {
        return store.cache.categories;
    },
    GET_ASSET: (store, id) => {

    },
    GET_PAGE: (store, page) => {

    },
    UPDATE: (store, id, newData) => {

    }
}

const AssetStore = ({ children }) => {
    let { value } = useCreateStore(context, reducer, actions);
    return <context.Provider value={ value }>{ children }</context.Provider>;
}

export default AssetStore;