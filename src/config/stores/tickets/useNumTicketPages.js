
import { useState, useEffect } from 'react';
import { request } from '../store';

export default function useNumTicketPages() {
    const [data, setData] = useState();
    const [status, setStatus]= useState({ text: 'loading' });

    useEffect(() => {
        const endpoint = 'http://localhost:9000/api/ticket/numpages';

        request(endpoint, {
            method: 'GET'
        })
        .then(status => {
            setStatus({
                text: status.text,
                msg: status.msg
            });

            setData(status.data)
        })
        .catch(status => {
            setStatus({
                text: status.text,
                msg: status.msg
            });
        });
    }, [])

    return {
        data,
        status
    }
}