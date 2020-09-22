
import { useState } from 'react';
import { patchRequest } from '../store';
import { MSG_CLEAR_TIME } from '../../constants';

function useUpdateOrder() {
    const [status, setStatus] = useState({});

    // TODO: do some stuff to prevent this from firing if unmounted
    const clearMsg = () => {
        setStatus(c => {
            let r = {...c};
            delete r.msg;
            return r;
        });
    }

    const updateOrder = (orderId, data) => {
        patchRequest({
            endpoint: `http://localhost:9000/api/inventory/order/${orderId}`,
            data: data,
            onSucess: (msg) => {
                setStatus({
                    status: 'ok',
                    msg: msg
                });

                // set timeout to clear the message
                setTimeout(clearMsg, MSG_CLEAR_TIME);
            },
            onError: (msg) => {
                setStatus({
                    status: 'error',
                    msg: msg
                });

                // set timeout to clear the message
                setTimeout(clearMsg, MSG_CLEAR_TIME);
            }
        });
    }

    return {
        updateOrder,
        status: status.status,
        msg: status.msg
    }; 
}

export default useUpdateOrder;