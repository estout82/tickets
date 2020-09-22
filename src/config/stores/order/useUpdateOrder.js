
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
        // function to pass to promise constructor
        const callback = (resolve, reject) => {
            patchRequest({
                endpoint: `http://localhost:9000/api/inventory/order/${orderId}`,
                data: data,
                onSucess: (msg) => {
                    const statusData = {
                        status: 'ok',
                        msg: msg
                    }

                    setStatus(statusData);
    
                    // set timeout to clear the message
                    setTimeout(clearMsg, MSG_CLEAR_TIME);

                    return resolve(statusData)
                },
                onError: (msg) => {
                    const statusData = {
                        status: 'error',
                        msg: msg
                    }

                    setStatus(statusData);
    
                    // set timeout to clear the message
                    setTimeout(clearMsg, MSG_CLEAR_TIME);

                    return reject(statusData);
                }
            });
        }

        return new Promise(callback);
    }

    return {
        do: updateOrder,
        status: status.status,
        msg: status.msg
    }; 
}

export default useUpdateOrder;