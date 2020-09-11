
import { apiRequest } from '../../util';

const useUpdateUser = (onDone) => {
    const handleRequestDone = (response) => {
        if (response.status !== 'ok') {
            handleRequestError({ msg: response.msg, friendlyMsg: response.friendlyMsg });
        }
    }

    const handleRequestError = (error) => {
        console.error(`error: ${error.msg}`);
        onDone(error);
    }

    const updateUser = (id, newData) => {
        const endpoint = `http://localhost:9000/api/user/${id}`;

        apiRequest(endpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            handleRequestDone(json);
        })
        .catch(error => {
            handleRequestError(error)
        });
    }

    return updateUser;    
}

export default useUpdateUser;