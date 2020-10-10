
import { useState, useEffect } from 'react';
import { request, mergeObjects } from '../store';
import { error } from '../../util';
import useAuthUser from '../../../components/context/useAuthUser';

export default function useTicket(ticketId) {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });
    const authUser = useAuthUser();

    // effect that fetches data on mount
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/api/ticket/${ticketId}`;

        // if status is not loading, set status to loading
        if (status.text !== 'loading') {
            setStatus(c => {
                return {...c, text: 'loading'};
            })
        }

        request(getRequestEndpoint, { method: 'GET' })
        .then(({ data, msg }) => {
            setData(data);
            setStatus(c => {
                let n = {...c, text: 'done', msg: msg};
                return n;
            });
        })
        .catch(({ msg }) => {
            setStatus(c => {
                let n = {...c, text: 'error', msg: msg};
                return n;
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticketId])

    // sends a patch request to update the ticket with specified data
    const update = (patchData) => {
        const patchRequestEndpoint = `http://localhost:9000/api/ticket/${ticketId}`;

        // return promise that resolves to status of update request
        return new Promise((resolve, reject) => {
            request(patchRequestEndpoint, {
                method: 'PATCH',
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

    const addComment = (addCommentData) => {
        const addCommentEndpoint = `http://localhost:9000/api/ticket/${ticketId}/comment`;

        return new Promise((resolve, reject) => {
            request(addCommentEndpoint, {
                method: 'POST',
                data: addCommentData
            })
            .then(msg => {
                // update local data
                // TODO: set date, and user name according to current auth user
                setData(c => {
                    let n = {...c};
                    
                    // if comment array doesn't exist, create it
                    if (!(n.comments instanceof Array)) {
                        n.coments = [];
                    }

                    // add new comment to array
                    n.comments.push({
                        ...addCommentData,
                        user: {
                            _id: addCommentData.user,
                            firstName: authUser.firstName,
                            lastName: authUser.lastName
                        }
                    });

                    return n;
                });

                // return resolved promise with msg
                return resolve(msg);
            })
            .catch(msg => {
                return reject(msg);
            });
        });
    }

    const updateComment = () => {

    }

    const removeComment = () => {

    }

    // makes a post request to api to add a todo to this tickets todo list
    // also updates the local state if request succeeds
    const addTodo = (data) => {
        const addTodoEndpoint = `http://localhost:9000/api/ticket/${ticketId}/todo`;

        return new Promise((resolve, reject) => {
            request(addTodoEndpoint, {
                method: 'POST',
                data: data
            })
            .then(status => {
                // update local data
                setData(c => {
                    let n = {...c};
                    if (!(n.todos instanceof Array)) n.todos = [];
                    n.todos.push({ 
                        label: data.label, 
                        completed: false,
                        _id: status.data.todoId 
                    });
                    return n;
                });

                return resolve({
                    text: 'ok',
                    msg: status.msg
                });
            })
            .catch(status => {
                // log error
                error(status.msg);

                return reject({
                    text: 'error',
                    msg: status.msg
                });
            });
        });
    }

    const updateTodo = (todoId, data) => {
        const updateTodoEndpoint = `http://localhost:9000/api/ticket/${ticketId}/todo/${todoId}`;

        return new Promise((resolve, reject) => {
            request(updateTodoEndpoint, {
                method: 'PATCH',
                data: data
            })
            .then(status => {
                // update local data
                setData(c => {
                    let n = {...c};

                    // attempt to find todo based on the id
                    let index = n.todos.findIndex(todo => {
                        return todo._id === todoId;
                    });

                    // if found, index will not be -1, and assign new data to that object
                    if (index !== -1) {
                        Object.assign(n.todos[index], data);
                    }

                    return n;
                });

                return resolve({
                    text: 'ok',
                    msg: status.msg
                });
            })
            .catch(status => {
                return reject({
                    text: 'error',
                    msg: status.msg
                });
            });
        });
    }

    const deleteTodo = (todoId) => {
        const deleteTodoEndpoint = `http://localhost:9000/api/ticket/${ticketId}/todo/${todoId}`;

        return new Promise((resolve, reject) => {
            request(deleteTodoEndpoint, { method: 'DELETE' })
            .then(status => {
                // update local data
                setData(c => {
                    let n = {...c};
                    const index = data.todos.findIndex(todo => todo._id === todoId); // find index of the todo in local data

                    // if found, remote it from local data array
                    if (index !== -1) {
                        n.todos = [
                            ...n.todos.slice(0, index),
                            ...n.todos.slice(index + 1)
                        ];
                    }

                    return n;
                });

                return resolve({
                    text: 'ok',
                    msg: status.msg
                });
            })
            .catch(status => {
                return reject({
                    text: 'error',
                    msg: status.msg
                });
            })
        });
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
        addTodo,
        updateTodo,
        deleteTodo,
        addOrder,
        removeOrder
    }
}