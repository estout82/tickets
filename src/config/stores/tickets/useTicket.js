
import { useState, useEffect } from 'react';
import { getRequestPromise, patchRequestPromise, mergeObjects } from '../store';


export default function useTicket(ticketId) {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ status: 'loading' });

    // effect that fetches data on mount
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/api/ticket/${ticketId}`;

        getRequestPromise(getRequestEndpoint)
        .then(({ data, msg }) => {
            setData(data);
            setStatus(c => {
                let n = {...c, status: 'done', msg: msg};
                return n;
            });
        })
        .catch(({ msg }) => {
            setStatus(c => {
                let n = {...c, status: 'error', msg: msg};
                return n;
            });
        });
    }, [ticketId, setData, setStatus])

    // sends a patch request to update the ticket with specified data
    const update = (patchData) => {
        const patchRequestEndpoint = `http://localhost:9000/api/ticket/${ticketId}`;

        // return promise that resolves to status of update request
        return new Promise((resolve, reject) => {
            patchRequestPromise(patchRequestEndpoint, {
                data: patchData
            })
            .then((msg) => {
                // update local data
                setData(c => {
                    let n = {...c};
                    n = mergeObjects(patchData, n);
                    return n;
                });

                // return resolved promise with message
                return resolve(msg);
            })
            .catch((msg) => {
                // don't update local data
                return reject(msg);
            });
        });
    }

    const addComment = () => {

    }

    const updateComment = () => {

    }

    const removeComment = () => {

    }

    const addTodoList = () => {

    }

    const updateTodoList = () => {

    }

    const removeTodoList = () => {

    }

    const addOrder = () => {

    }

    const removeOrder = () => {

    }

    return {
        data,
        status,
        update,
        addComment,
        updateComment,
        removeComment,
        addTodoList,
        updateTodoList,
        removeTodoList,
        addOrder,
        removeOrder
    }
}