
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
        switch (json.status) {
            case 'ok':
                onSucess({
                    text: json.friendlyMsg,
                    appearance: 'ok'
                });
                return;
            case 'error':
                handleError(json.msg, () => {
                    onError({ 
                        text: json.friendlyMsg,
                        appearance: 'error'
                    });
                });
                return;
            default:
                handleError(json.msg, () => {
                    onError({ 
                        text: 'Failed to verify save completion',
                        appearance: 'error' 
                    });
                });
                return;
        }
    })
    .catch(error => {
        handleError(error.msg, () => {
            onError({ 
                text: error.friendlyMsg ? 
                    error.friendlyMsg : 
                    'An error occured, the server responsed with code 500',
                appearance: 'error'
            });
        });
    });
}

export function postRequest({ endpoint, data }) {
    const promiseCallback = (resolve, reject) => {
        apiRequest(endpoint, {
            method: 'POST'
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            switch (json.status) {
                case 'ok':
                    return resolve({
                        text: json.friendlyMsg,
                        appearance: 'ok'
                    });
                case 'error':
                    // log to console
                    handleError(json.msg);

                    return reject({
                        text: json.friendlyMsg,
                        appearance: 'error'
                    });
                default:
                    return;
            }
        })
        .catch(error => {
            // log to console
            handleError(error.msg)

            const msgObject = {
                text: error.friendlyMsg,
                appearance: 'error'
            }

            return reject(msgObject);
        });
    };

    return new Promise(promiseCallback);
}

// function preforms a get request to specified endpoint and returns a promise
// promise resolves to { data, msg } on sucess
// promise rejects to { msg } on error 
export function getRequestPromise(endpoint, options) {
    const promiseCallback = (resolve, reject) => {
        apiRequest(endpoint)
        .then(response => {
            return response.json();
        })
        .then(json => {
            switch (json.status) {
                case 'ok':
                    // return resolved promise with data and status / message
                    return resolve({
                        data: json.data,
                        msg: {
                            text: json.friendlyMsg,
                            appearance: 'ok'
                        }
                    });
                case 'error':
                    handleError(json.msg);

                    // return rejected promise with status / message
                    return reject({
                        msg: {
                            text: json.friendlyMsg,
                            appearance: 'error'
                        }
                    });
                default:
                    handleError(`unknown status ${json.status} recieved in get request to endpoint ${endpoint}`)

                    return reject({
                        msg: {
                            text: 'Unable to verify request completion',
                            appearance: 'warning'
                        }
                    });
            }
        })
        .catch(error => {
            handleError(error.msg);

            return reject({
                msg: {
                    text: error.friendlyMsg,
                    appearance: 'error'
                }
            });
        });
    };

    return new Promise(promiseCallback);
}

export function patchRequestPromise(endpoint, { data, onSucess, onError }) {
    console.log('patch promise');

    const promiseCallback = (resolve, reject) => {
        console.log('in promise');
        apiRequest(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            switch (json.status) {
                case 'ok':
                    return resolve({
                        text: json.friendlyMsg,
                        appearance: 'ok'
                    });
                case 'error':
                    handleError(json.msg);

                    return reject({ 
                        text: json.friendlyMsg,
                        appearance: 'error'
                    });
                default:
                    handleError(json.msg);

                    return reject({ 
                        text: json.friendlyMsg,
                        appearance: 'error'
                    });
            }
        })
        .catch(error => {
            handleError(error.msg);

            return reject({ 
                text: error.friendlyMsg ? 
                    error.friendlyMsg : 
                    'An error occured, the server responsed with code 500',
                appearance: 'error'
            });
        });
    }

    return new Promise(promiseCallback);
}

// recursivley merges objects
// TODO: handle arrays
export function mergeObjects(dataToMerge, data) {
    let newData = {...data};

    Object.keys(dataToMerge).forEach(key => {
        const value = dataToMerge[key];

        // if type is object, process recursivley
        if (typeof value === 'object') {
            data[key] = mergeObjects(value, data[key]);
            return;
        }

        // type is not object, simply set like a normal property
        data[key] = value;
    });

    return newData;
}