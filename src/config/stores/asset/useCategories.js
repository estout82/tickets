
import { useAssetStore } from './AssetStore';

const useCategories = () => {
    const store = useAssetStore();
    return store.action('GET_CATEGORIES');
}

export default useCategories;