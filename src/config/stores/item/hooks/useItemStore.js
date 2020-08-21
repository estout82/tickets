
import { useContext } from 'react';
import { context } from '../ItemStore';

const useItemStore = () => {
    return useContext(context);
}

export default useItemStore;