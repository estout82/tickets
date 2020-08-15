
import useUserStore from '../useUserStore';
import { useEffect } from 'react';

const useUserPage = (page, options = {}) => {
    const forceRefetch = options.forceRefetch;
    const store = useUserStore();

    // fetch data if needed (run every render)
    useEffect(() => {
        if (!store.pages[page] || forceRefetch) {
            store.getPage(page);
        }
    });

    // return the appropriate data
    return store.pages[page] || forceRefetch ? store.pages[page] : { status: 'loading' }
}

export default useUserPage;