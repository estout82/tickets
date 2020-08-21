
// TODO: maybe use this??

import { useReducer, useEffect } from 'react';

const actions = {
    FETCH_META: 'FETCH_META',
    FETCH_META_SUCESS: 'FETCH_META_SUCESS',
    FETCH_META_ERROR: 'FETCH_META_ERROR',
    FETCH_PAGE: 'FETCH_PAGE',
    FETCH_PAGE_SUCESS: 'FETCH_PAGE_SUCESS',
    FETCH_PAGE_ERROR: 'FETCH_PAGE_ERROR',
    FETCH_BATCH: 'FETCH_BATCH',
    FETCH_BATCH_SUCESS: 'FETCH_BACTH_SUCESS',
    FETCH_BATCH_ERROR: 'FETCH_BACTH_ERROR',
    PATCH: 'PATCH',
    PATCH_SUCESS: 'PATCH_SUCESS',
    PATCH_ERROR: 'PATCH_ERROR'
};

const useCreateStore = (init) => {
    const reducer = (state, action) => {
        const type = action.type;

        // call the function mapped to the action
        return init[type](state, action);
    }

    const [state, dispatch] = useReducer(reducer, { status: 'loading', cache: {} });

    // load meta on mount
    useEffect(() => {
        dispatch({
            type: actions.FETCH_META,
            payload: {
                dispatch: dispatch
            }
        })
    }, []);

    const getMeta = () => {
        if (state.status === 'done') {
            return state.meta;
        } else {
            // if state is error or loading, just return the whole state
            return state;
        }
    }

    const getSingle = (id) => {
        if (state.cache[id]) {
            // if id exists in cache, just return it
            return state.cache[id];
        } else {
            // if it doesn't, get it and return loading
            dispatch({
                type: actions.FETCH_SINGLE,
                payload: {
                    dispatch: dispatch,
                    id: id
                }
            });

            return { status: 'loading' };
        }
    }

    const getPage = (pageNum) => {

    }

    const patch = (id) => {

    }

    const search = (criteria) => {

    }

    return {
        getMeta,
        getSingle,
        getPage,
        patch,
        search
    }
}

export default useCreateStore;