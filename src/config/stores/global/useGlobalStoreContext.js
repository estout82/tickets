
import { useContext } from 'react';
import { context } from './GlobalStoreContext';

export default function useGlobalStoreContext() {
    return useContext(context);
}