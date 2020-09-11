
import useGlobalStore from '../useGlobalStore';

const useOrganizations = () => {
    const store = useGlobalStore();

    console.log(store.status);

    // is store is not done, return none (no status)
    // TODO: handle errors?
    if (store.status !== 'done') {
        return { status: 'none' }
    }

    return store.organizations.data;
}

export default useOrganizations;