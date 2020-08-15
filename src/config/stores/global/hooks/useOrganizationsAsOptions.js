
// TODO: use db id as options key??

import useGlobalStore from '../useGlobalStore';

const useOrganizationsAsOptions = () => {
    const store = useGlobalStore();

    console.dir(store);

    if (store.status !== 'done') {
        return { }; // return empty object to avoid error
    }

    // build the options object to pass to select component
    let options = {};
    store.organizations.organizations.forEach(org => {
        options[org.shortName] = org.name;
    });

    return options;
}

export default useOrganizationsAsOptions;