
import { useEffect, useState, useCallback } from 'react';

const useUserPage = (page) => {
    const [state, setState] = useState({ status: 'loading' });

    const handleFetchError = useCallback(error => {
        console.error(`fetch error in useUserPage. page: ${page}`);
        setState({ status: 'error', msg: error.msg });
    }, [page]);

    const handleFetchDone = useCallback((response) => {
        // ensure response is ok
        if (response.status !== 'ok') {
            setState({ status: 'error' });
            console.error(`unable to fetch asset: ${response.msg}`);
            return;
        }

        let newState = { status: 'done' };
        newState.users = response.data;
        setState(newState);
    }, []);

    useEffect(() => {
        const endpoint = `http://localhost:9000/api/user/page/${page}`

        fetch(endpoint)
        .then(response => {
            return response.json();
        })
        .then(json => {
            handleFetchDone(json);
        })
        .catch(error => {
            handleFetchError(error);
        });
    }, [handleFetchDone, handleFetchError, page]);

    return state;
}

export default useUserPage;