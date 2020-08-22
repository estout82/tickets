
import { LOADING, DONE } from '../../util';

export const actions = {
    FETCH: 'FETCH',
    SUCESS: 'SUCESS',
    ERROR: 'ERROR'
};

const fakeResponse = {
    msg: 'sucess',
    data: {
        categories: {
            0: 'Adapter'
        }
    }
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.FETCH:
            // fetch fake data
            setTimeout(() => {
                payload.dispatch({
                    type: actions.SUCESS,
                    payload: {
                        response: fakeResponse
                    }
                });
            }, 500);

            let stateAfterFetch = {...state};
            stateAfterFetch.status = LOADING;
            return stateAfterFetch;
        case actions.SUCESS:
            let stateAfterSucess = {...state};
            Object.assign(stateAfterSucess, payload.response.data);
            stateAfterSucess.status = DONE;
            return stateAfterSucess;
        case actions.ERROR:
            return;
        default:
            console.error(`unknown action ${type} in item meta reducer`);
    }
}

export default reducer;