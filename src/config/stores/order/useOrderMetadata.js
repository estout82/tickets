
import { useState, useEffect, useCallback } from 'react';
import { getRequest } from '../store';

function useOrderMetadata() {
    const [state, setState] = useState({ status: 'loading' });

    const request = useCallback(() => {
        getRequest({
            endpoint: 'http://localhost:9000/api/meta/order',
            errorMsg: 'unable to get order metadata',
            friendlyErrorMsg: 'Unable to load order data. Please try again.'
        }, setState);
    }, []);

    useEffect(() => {
        request();
    }, [request]);

    return state;
}

export default useOrderMetadata;