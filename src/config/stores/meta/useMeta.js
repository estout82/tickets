
import { useState , useEffect} from 'react';
import { request } from '../store';

export default function useMeta() {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    // effect to initally load all data
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/api/meta`;

        request(getRequestEndpoint, { method: 'GET' })
        .then(status => {
            // format data so it is easily findable by API user
            const formattedData = {};
            formattedData.ticket = status.data.find(elem => elem.metaCategory === 'ticket');
            formattedData.order = status.data.find(elem => elem.metaCategory === 'order');
            formattedData.init = status.data.find(elem => elem.metaCategory === 'init');

            setData(formattedData);

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