
import useTicketStore from '../useTicketStore';

const useTicketCategoriesAsOptions = () => {
    const store = useTicketStore();
    return store.getCategories();
}

export default useTicketCategoriesAsOptions;