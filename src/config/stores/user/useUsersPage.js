
import useUsersStore from './useUsersStore';
import { useEffect } from 'react';

const useUsersPage = (page, options = {}) => {
    const forceRefetch = options.forceRefetch;
    const store = useUsersStore();

    // fetch data if needed (run every render)
    useEffect(() => {
        if (!store.pages[page] || forceRefetch) {
            store.getPage(page);
        }
    });

    // return the appropriate data
    if (store.pages[page] || forceRefetch) {
        return store.pages[page];
    } else {
        return { status: 'loading' }
    }
}

export default useUsersPage;