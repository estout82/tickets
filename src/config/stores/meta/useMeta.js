
import { useState , useEffect} from 'react';
import { request } from '../store';

export default function useMeta() {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    // effect to initally load all data
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/meta`;

        request(getRequestEndpoint, { method: 'GET' })
        .then(status => {
            // set data
            setData(status.data);

            // set status
            setStatus({ text: 'done' });
        })
        .catch(status => {
            // set status
            setStatus({
                text: status.text,
                msg: status.msg
            });
        });

    }, []);

    return {
        data,
        status
    };
}