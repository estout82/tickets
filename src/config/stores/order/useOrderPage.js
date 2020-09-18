
import { useState, useEffect, useCallback } from 'react';
import { getRequest } from '../store';

function useOrderPage(page) {
    const [status, setStatus] = useState({ status: 'loading' });

    const request = useCallback(() => {
        getRequest({
            endpoint: 'http://localhost:9000/api/inventory/order/page/1',
            errorMsg: `failed to get order page ${page}`,
            friendlyErrorMsg: `Unable to load order page ${page}. Please try again.`
        }, setStatus);
    }, [page]);

    useEffect(() => {
        request();
    }, [request, page]);

    return status;
}

export default useOrderPage;