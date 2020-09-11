
// TODO: use db id as options key??

import useGlobalStore from '../useGlobalStore';

const useOrganizationsAsOptions = () => {
    const store = useGlobalStore();

    if (store.status !== 'done') {
        return { }; // return empty object to avoid error
    }

    // build the options object to pass to select component
    let options = {};
    store.organizations.data.forEach(org => {
        options[org._id] = org.name;
    });

    return options;
}

export default useOrganizationsAsOptions;