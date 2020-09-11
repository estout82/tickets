
import { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../../util';

const useTicketBatch = (ids) => {
    const [state, setState] = useState({ status: 'loading', tickets: [] });

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
            newState.tickets.push({ ...response.data, status: 'done' });

            // see if all tickets from ids list have been fetched
            // TODO: revamp this by checking ids
            let allDone = false;

            if (newState.tickets.length === ids.length) {
                allDone = true;
            }

            if (allDone) {
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
            apiRequest(`http://localhost:9000/api/ticket/${id}`)
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
    }, [handleFetchError, handleFetchSuccess, ids]);

    return state;
}

export default useTicketBatch;