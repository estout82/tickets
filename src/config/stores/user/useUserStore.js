
import { useContext } from 'react';
import { context } from './UserStore';

const useUsersStore = () => {
    return useContext(context);
}

export default useUsersStore;