
import { useState } from 'react';
import { patchRequest } from '../store';

function useUpdateOrder() {
    const [status, setStatus] = useState({ status: 'loading' });

    const updateOrder = (orderId, data) => {
        patchRequest({
            endpoint: `http://localhost:9000/api/inventory/order/${orderId}`,
            data: data,
            onSucess: (msg) => {
                setStatus({
                    status: 'done',
                    msg: msg
                });
            },
            onError: (msg) => {
                setStatus({
                    status: 'error',
                    msg: msg
                });
            }
        });
    }

    return {
        updateOrder,
        status
    }; 
}

export default useUpdateOrder;