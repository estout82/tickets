
import React, { createContext, useReducer, useEffect } from 'react';
import itemReducer, { actions as itemActions } from './reducers/item';
import metaReducer, { actions as metaActions } from './reducers/meta';
import { LOADING_OBJ, DONE } from '../storeUtil';

export const context = createContext();

const ItemStore = ({ children }) => {
    const [meta, metaDispatch] = useReducer(metaReducer, LOADING_OBJ);
    const [items, itemDispatch] = useReducer(itemReducer, LOADING_OBJ)

    // fetch meta data on mount
    useEffect(() => {
        metaDispatch({
            type: metaActions.FETCH,
            payload: {
                dispatch: metaDispatch
            }
        }); 
    }, []);

    const getCategories = () => {
        if (meta.status === DONE) {
            return meta.categories;
        } else {
            return meta;
        }
    }

    const getItem = (id) => {
        if (items[id]) return items[id];
        else return;
    }

    const getItemBatch = (ids) => {
        
    }

    const fetchItem = (id) => {
        itemDispatch({
            type: itemActions.FETCH_SINGLE,
            payload: {
                dispatch: itemDispatch,
                id: id
            }
        });
    }

    const fetchItemBatch = (ids) => {

    }

    const value = {
        getCategories,
        getItem,
        getItemBatch,
        fetchItem,
        fetchItemBatch
    };

    return (
        <context.Provider value={ value }>
            { children } 
        </context.Provider>
    );
}

export default ItemStore;