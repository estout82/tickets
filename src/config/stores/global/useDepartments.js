
import { useState, useEffect } from 'react';

// TODO: route not implemented
export default function useDepartments() {
    const [data] = useState();
    const [status,] = useState({ text: 'done' });

    // effeect to load data on mount
    useEffect(() => {
        
    }, []);

    return {
        data,
        status
    }
}