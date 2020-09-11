
import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import Error from '../Error';

export const statuses = {
    loading: { status: 'loading'},
    error: { status: 'error' },
    done: { status: 'done' }
}

const useLoading = (getStatus) => {
    const [status, setStatus] = useState({ status: 'loading' });

    // required that isLoading is created by useCallback
    // this means that new function will be created when a dep changes
    // this effect will pick that change up and only run when deps change
    useEffect(() => {
        const newStatus = getStatus();
        setStatus(newStatus);
    }, [getStatus]);

    const renderWhenLoaded = (render) => {
        switch (status.status) {
            case 'done':
                return render();
            case 'loading':
                return (
                    <Loading />
                );
            case 'error':
                return (
                    <Error msg={status.msg} />
                );
            default:
                console.error(`error: unknown status ${status.status} in useLoading hook`);
                return <></>;
        }
    } 

    return renderWhenLoaded;
}

export default useLoading;