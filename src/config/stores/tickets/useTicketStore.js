
import { useContext } from 'react';
import { context } from './TicketStore';

const useTicketStore = () => {
    return useContext(context);
}

export default useTicketStore;