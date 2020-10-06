
import { useState, useEffect } from 'react';
import { getRequestPromise } from '../store';

export default function useTicketPage(pageNumber) {
    const [data, setData] = useState();
    const [status, setStatus] = useState({ text: 'loading' });

    // effect that loads the requested page whenever it changes
    useEffect(() => {
        const getRequestEndpoint = `http://localhost:9000/api/ticket/page/${pageNumber}`;

        getRequestPromise(getRequestEndpoint)
        .then(({ data, msg }) => {
            setData(data);
            setStatus(c => {
                let n = {...c, text: 'done', msg: msg}
                return n;
            });
        })
        .catch(msg => {
            setStatus(c => {
                let n = {...c, text: 'error', msg: msg};
                return n;
            });
        });

        console.log(`effect ${pageNumber}`);
    }, [pageNumber]);

    const deleteTicket = (ticketId) => {
        // TODO: 
    }

    return {
        data,
        status,
        delete: deleteTicket
    }
}