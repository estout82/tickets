
// TODO: id as option key?
// TODO: memo?

import useGlobalStore from '../useGlobalStore';

const useDepartmentsAsOptions = () => {
    const store = useGlobalStore();

    // return empty object is store has not loaded
    if (store.status !== 'done') {
        return {};
    }

    let options = {};
    store.departments.data.forEach(dept => {
        options[dept.shortName] = dept.name;
    });
    return options;
}

export default useDepartmentsAsOptions;