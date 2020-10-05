
import { useState, useEffect } from 'react';
import { request } from '../store';

export default function useTicketCategories() {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    useEffect(() => {
        const getRequestEndpoint = 'http://localhost:9000/api/ticket/category';

        request(getRequestEndpoint, {
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

    return {
        data,
        status
    }
}