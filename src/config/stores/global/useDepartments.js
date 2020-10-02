
import { useState, useEffect } from 'react';

// TODO: route not implemented
export default function useDepartments() {
    const [data] = useState();
    const [status,] = useState({ text: 'done' });

    // effeect to load data on mount
    useEffect(() => {
        
    }, []);

    const asOptions = () => {
        // TODO: this is temporary
        return {
           1: 'IT',
           2: 'HR'
        }
    }

    return {
        data,
        status,
        asOptions
    }
}