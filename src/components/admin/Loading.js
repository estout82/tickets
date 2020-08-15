

/**
 * This component makes sure that the stores that this page depends on are initalized before rendering
 */

 // TODO: replace loading text with an animation

import React, { useState, useContext, useEffect } from 'react';

const Loading = ({ children, userStoreContext }) => {
    const [storesLoaded, setStoresLoaded] = useState(false);

    const userStore = useContext(userStoreContext);
    
    // check if the store has been loaded
    useEffect(() => {
        if (userStore.status !== 'done') return;

        // if we are here, all stores have loaded
        setStoresLoaded(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStore.status, setStoresLoaded]);

    return (
        <>
            { 
                storesLoaded ? 
                children :
                'loading'
            }
        </>
    );
}

export default Loading;