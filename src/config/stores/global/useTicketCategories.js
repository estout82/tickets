
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

    const asOptions = () => {
        let r = {};

        if (data) {
            data.forEach(category => {
                r[category._id] = category.name;
            });
        } 

        return r;
    }

    const getById = (id) => {
        if (!id) return;

        return data.find(category => id === category._id);
    }

    const getForm = (categoryId) => {
        let category = getById(categoryId);

        if (category) {
            return category.form;
        }
    }

    return {
        data,
        status,
        asOptions,
        getById,
        getForm
    }
}