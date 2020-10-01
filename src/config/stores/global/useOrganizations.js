
import { useState, useEffect } from 'react';
import { request } from '../store';

export default function useOrganizations() {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    // effeect to load data on mount
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/api/organization`;

        request(getRequestEndpoint, { method: 'GET' })
        .then(status => {
            setData(status.data);
            setStatus({
                text: status.text,
                msg: status.msg
            });
        })
        .catch(status => {
            setStatus(status);
        });
    }, []);

    return {
        data,
        status
    }
}