
import { useState, useCallback, useEffect } from 'react';
import { apiRequest } from '../../util';

const useAssetBatch = (ids) => {
    const [state, setState] = useState({ status: 'loading' });

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
            newState[response.data._id] = { ...response.data, status: 'done' };

            // see if all assets from ids list have been fetched
            let allDone = true;

            ids.forEach(id => {
                if (!newState.hasOwnProperty(id) || newState[id].status !== 'done') {
                    allDone = false;
                }
            })

            if (allDone) {
                newState.status = 'done';
            }

            return newState;
        });
    }, [ids, handleFetchError]);

    useEffect(() => {
        // fetch each asset from API
        ids.forEach(id => {
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
    }, []);

    return state;
}


export default useAssetBatch;