
export const LOADING = 'loading';
export const ERROR = 'error';
export const DONE = 'done';

export const LOADING_OBJ = { status: LOADING };

// checks the cache object for id, if found return it if not return false
export const getFromCache = (cache, id, onMiss) => {
    if (cache[id]) {
        // found it, return it
        return cache[id];
    } else {
        // call the onMiss callback and return loading state
        if (onMiss) onMiss();
        return LOADING_OBJ;
    }
}