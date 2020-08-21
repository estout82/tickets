
import useItemStore from './useItemStore';

const useCategories = () => {
    const store = useItemStore();
    return store.getCategories();
}

export default useCategories;