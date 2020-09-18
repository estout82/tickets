
import { logError, apiRequest } from '../util';

function handleError(msg, setData) {
    logError(msg);
    setData();
}

export function getRequest(options, setDataCallback) {
    // TODO: process options

    apiRequest(options.endpoint, {
        method: 'GET'
    })
    .then(response => {
        // TODO: error checking here

        return response.json();
    })
    .then(data => {
        // check status
        if (data.status !== 'ok') {
            handleError(options.errorMsg, 
                () => setDataCallback({
                    status: 'error',
                    msg: options.errorMsg,
                    friendlyMsg: options.friendlyErrorMsg
                }
            ));

            return;
        }

        // status ok, set new data
        setDataCallback({
            status: 'done',
            data: data.data
        });

        return;
    })
    .catch(error => {
        handleError(`request to endpoint ${options.endpoint} failed`, 
            () => setDataCallback({
                status: 'error',
                msg: options.errorMsg,
                friendlyMsg: options.friendlyErrorMsg
            })
        ); 
    });
}

