
export const copyAndSet = (old, field, value) => {
    let newObject = {...old};
    newObject[field] = value;
    return newObject;
}

export const apiRequest = (...args) => {
    return fetch(...args);
}