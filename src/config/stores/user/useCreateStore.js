
import { useReducer, useEffect } from 'react';

const useCreateStore = (context, reducer, actions) => {
    const [state, dispatch] = useReducer(reducer, { 
        status: 'loading',
        cache: {}
    });

    // dispatch load to reducer on mount
    useEffect(() => {
        dispatch({
            type: 'LOAD',
            payload: {
                dispatch: dispatch
            }
        });
    }, []);

    // this function preforms an action
    const action = (name, ...args) => {
        // ensure action exists
        if (!actions[name]) {
            console.error(`unknown action ${name} in store action function`);
            return;
        }

        // if store is still loading, just return loading
        if (state.status === 'loading') {
            return { status: 'loading' }
        }
        
        // if loaded, call action
        return actions[name]({ 
            cache: state.cache,
            dispatch: dispatchWrapper
        }, ...args);
    }

    // wraps the dispatch function so all args are set in payload
    const dispatchWrapper = (action) => {
        action.payload.dispatch = dispatch;
        dispatch(action);
    }

    // this is the provider component
    const value = { action };

    return {
        value,
    }
}

export default useCreateStore;