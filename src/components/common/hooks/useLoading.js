
import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const useLoading = (isLoading) => {
    const [loading, setLoading] = useState(true);

    // required that isLoading is created by useCallback
    // this means that new function will be created when a dep changes
    // this effect will pick that change up and only run when deps change
    useEffect(() => {
        if (!isLoading()) {
            setLoading(false);
        }
    }, [isLoading]);

    const renderWhenLoaded = (render) => {
        return (
            <>
                {
                    loading ?
                    <Loading /> :
                    render()
                }
            </>
        );
    } 

    return renderWhenLoaded;
}

export default useLoading;