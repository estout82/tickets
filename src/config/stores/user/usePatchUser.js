
import useUserStore from './useUserStore';

const usePatchUser = (onFinish) => {
    const store = useUserStore();
    return store.patchUser;
}

export default usePatchUser;