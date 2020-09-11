
import { useState, useCallback, useEffect } from 'react';
import { apiRequest } from '../../util';

const useAssetBatch = (ids) => {
    const [state, setState] = useState({ status: 'loading', assets: {} });

    const handleFetchError = useCallback((error) => {
        console.error(`error during asset batch fetch: ${error}`);
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
            newState.assets[response.data._id] = { ...response.data, status: 'done' };

            // if loaded assets and requested asset ids are same length, we're done
            // TODO: error handling logic
            if (Object.keys(newState.assets).length === ids.length) {
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
            // did we already get the asset?
            if (state.assets[id]) {
                return;
            }

            apiRequest(`http://localhost:9000/api/inventory/asset/${id}`)
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
    }, [handleFetchError, handleFetchSuccess, ids, state.assets]);

    return state;
}


export default useAssetBatch;