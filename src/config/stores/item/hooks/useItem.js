
import { useEffect } from 'react';
import useItemStore from './useItemStore';

const useItem = (id) => {
    const store = useItemStore();
    const item = store.getItem(id);

    useEffect(() => {
        if (!item) {
            store.fetchItem(id);
        }
    });

    return item ? item : { status: 'loading' };
}

export default useItem;