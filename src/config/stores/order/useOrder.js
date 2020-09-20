
import { useState, useCallback, useEffect } from 'react';
import { getRequest } from '../store';

function useOrder(orderId) {
    const [state, setState] = useState({ status: 'loading' });

    const request = useCallback(() => {
        getRequest({
            endpoint: `http://localhost:9000/api/inventory/order/${orderId}`,
            errorMsg: `unable to get order ${orderId}`,
            friendlyErrorMsg: 'Unable to get order data. Please try again'
        }, setState);
    }, [orderId]);

    useEffect(() => {
        request();
    }, [request]);

    return state;
}

export default useOrder;