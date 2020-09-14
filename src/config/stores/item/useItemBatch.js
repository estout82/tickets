
import { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../../util';

const useItemBatch = (ids) => {
    const [state, setState] = useState({ status: 'loading', items: {} });

    const handleFetchError = useCallback((error) => {
        console.error(`error during item batch fetch: ${error}`);
    }, []);

    const handleFetchSuccess = useCallback((response) => {
        // make sure request was sucessful
        if (response.status !== 'ok') {
            handleFetchError(response);
            setState({ status: 'error' });
            return;
        }

        // determine the new state from current state
        setState(c => {
            let newState = {...c};
            newState.items[response.data._id] = { ...response.data, status: 'done' };

            if (Object.keys(newState.items).length === ids.length) {
                newState.status = 'done';
            }

            return newState;
        });
    }, [ids, handleFetchError]);

    useEffect(() => {
        if (ids == null) {
            // set state to done w/o fetch if no ids are passed
            setState({ status: 'done' });
            return;
        }

        // fetch each asset from API
        ids.forEach(id => {
            // if we have already fetched this id, return
            if (state.items[id]) {
                return;
            }

            apiRequest(`http://localhost:9000/api/inventory/item/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                handleFetchSuccess(json);
            })
            .catch((error) => {
                handleFetchError(error);
            });
        })
    }, [handleFetchError, handleFetchSuccess, ids, state.items]);

    return state;
}

export default useItemBatch;