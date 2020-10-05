
import { useState, useEffect } from 'react';
import { request } from '../store';

export default function useTicketForms() {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    useEffect(() => {
        const endpoint = 'http://localhost:9000/api/ticket/form';

        request(endpoint, {
            method: 'GET'
        })
        .then(status => {
            setStatus({
                text: status.text,
                msg: status.msg
            });

            setData(status.data);
        })
        .catch(status => {
            setStatus({
                text: status.text,
                msg: status.msg
            });
        })
    }, []);
    
    const getById = (id) => {
        if (!id) return null;

        // search array for form def with id
        return data.find(form => form._id === id);
    }

    return {
        data,
        status,
        getById
    }
}