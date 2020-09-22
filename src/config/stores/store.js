
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
    const headers = {
        'Content-Type': 'application/json'
    };

    apiRequest(endpoint, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: new Headers(headers)
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.dir(json);

        switch (json.status) {
            case 'ok':
                onSucess({
                    msg: json.friendlyMsg,
                    appearance: 'ok'
                });
                return;
            case 'error':
                handleError(json.msg, () => {
                    onError({ 
                        msg: json.friendlyMsg,
                        appearance: 'error'
                    });
                });
                return;
            default:
                handleError(json.msg, () => {
                    onError({ 
                        msg: 'Failed to verify save completion',
                        appearance: 'error' 
                    });
                });
                return;
        }
    })
    .catch(error => {
        handleError(error.msg, () => {
            onError({ 
                msg: error.friendlyMsg ? error.friendlyMsg : 'An error occured, the server responsed with code 500',
                appearance: 'error'
            });
        });
    });
}