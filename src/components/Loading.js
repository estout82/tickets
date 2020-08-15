
import React, { useEffect, useState } from 'react';
import useGlobalStore from '../config/stores/global/useGlobalStore';

const Loading = ({ children }) => {
    const [status, setStatus] = useState('loading');
    const globalStore = useGlobalStore();

    // check and see if global store is loaded
    useEffect(() => {
        if (globalStore.status !== 'done') return;
        
        // if we are here all stores have loaded
        setStatus('done');
    }, [globalStore.status]);

    return (
        <>
            { 
                status === 'done' ?
                children :
                'loading'
            }
        </>    
    );
}

export default Loading;