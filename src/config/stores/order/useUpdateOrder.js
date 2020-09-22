
import { patchRequest } from '../store';
import { MSG_CLEAR_TIME } from '../../constants';

function useUpdateOrder() {
    // TODO: do some stuff to prevent this from firing if unmounted
    const clearMsg = () => {

    }

    const updateOrder = (orderId, data) => {
        // function to pass to promise constructor
        const callback = (resolve, reject) => {
            patchRequest({
                endpoint: `http://localhost:9000/api/inventory/order/${orderId}`,
                data: data,
                onSucess: (msg) => {
                    // set timeout to clear the message
                    setTimeout(clearMsg, MSG_CLEAR_TIME);

                    return resolve({
                        status: 'ok',
                        msg: msg
                    })
                },
                onError: (msg) => {
                    // set timeout to clear the message
                    setTimeout(clearMsg, MSG_CLEAR_TIME);

                    return reject({
                        status: 'error',
                        msg: msg
                    });
                }
            });
        }

        return new Promise(callback);
    }

    return {
        do: updateOrder
    }; 
}

export default useUpdateOrder;