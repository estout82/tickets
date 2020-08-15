
import { useContext } from 'react';
import { context } from './GlobalStore';

const useGlobalStore = () => {
    return useContext(context);
}

export default useGlobalStore;