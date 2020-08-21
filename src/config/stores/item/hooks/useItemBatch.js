
import { useEffect } from 'react'
import useItemStore from './useItemStore';
import { LOADING_OBJ } from '../../storeUtil';

const useTicketBatch = (ids) => {
    const store = useItemStore();
    let batch = store.getBatch(ids);

    // need to determine if we need to fetch the data
    let needsFetch = false;

    if (batch) {
        Object.keys(batch).forEach(key => {
            const item = batch[key];
    
            // if one of the items in undefined, a fetch is needed
            // also, set that undefined object to loading object
            if (!item) {
                needsFetch = true;
                batch[key] = LOADING_OBJ;
            }
        });
    }

    // fetch data if needed (run every render)
    useEffect(() => {
        if (needsFetch) {
            store.fetchBatch(ids);
        }
    });

    return batch;
}

export default useTicketBatch;