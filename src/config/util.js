
export const apiRequest = (...args) => {
    return fetch(...args);
}

export function logError(msg) {
    console.error(`error: ${msg}`);
}

export function error(msg) {
    console.error(`error: ${msg}`);
}