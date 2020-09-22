
import { logError, apiRequest } from '../util';

function handleError(msg, cleanup) {
    logError(msg);
    if (cleanup) cleanup();
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

export function patchRequest({ endpoint, data, onSucess, onError }) {
    apiRequest(endpoint, {
        method: 'PATCH',
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        switch (json.status) {
            case 'ok':
                onSucess({
                    msg: json.friendlyMsg
                });
                return;
            case 'error':
                handleError(json.msg, () => {
                    onError({ msg: json.friendlyMsg });
                });
                return;
            default:
                handleError(json.msg, () => {
                    onError({ msg: 'Failed to verify save completion' });
                });
                return;
        }
    })
    .catch(error => {
        handleError(error.msg, () => {
            onError(error.friendlyMsg ? error.friendlyMsg : 'A server error occured');
        });
    });
}