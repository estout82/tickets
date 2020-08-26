
import { useState, useEffect, useCallback } from 'react';

const useAsset = (id) => {
    const [state, setState] = useState({ status: 'loading' });

    const handleFetchDone = useCallback((response) => {
        // ensure response is ok
        if (response.status !== 'ok') {
            setState({ status: 'error' });
            console.error(`unable to fetch asset: ${response.msg}`);
            return;
        }

        let newState = { status: 'done' };
        console.log(response);
        Object.assign(newState, response.data);
        setState(newState);
    }, []);

    const handleFetchError = useCallback((error) => {
        console.error('error fetching asset');
    }, []);

    useEffect(() => {
        fetch(`http://localhost:9000/api/inventory/asset/${id}`)
        .then((response) => {
            // TODO: better check of response information
            return response.json();
        })
        .then((json) => {
            handleFetchDone(json);
        })  
        .catch((error) => {
            handleFetchError(error);
        });
    }, [id, handleFetchError, handleFetchDone]);

    return state;
}

export default useAsset;