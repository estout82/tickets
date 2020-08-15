
export const copyAndSet = (old, field, value) => {
    let newObject = {...old};
    newObject[field] = value;
    return newObject;
}