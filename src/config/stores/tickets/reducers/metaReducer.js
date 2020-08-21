// TODO: rework meta fetch so it can fetch from a few endpoints instead of must one

import { copyAndSet } from "../../../util";

export const actions = {
    FETCH: 'FETCH',
    SUCESS: 'SUCESS',
    ERROR: 'ERROR'
};

const fakeResponse = {
    msg: 'sucess',
    data: {
        categories: {
            0: 'Hardware Issue',
            1: 'Network Issue',
            2: 'Software Issue',
            3: 'Equipment Request',
            4: 'Account Request'
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
            return copyAndSet(state, 'status', 'loading');
        case actions.SUCESS:
            let stateAfterFetch = copyAndSet(state, 'status', 'done');
            stateAfterFetch.data = payload.response.data;
            return stateAfterFetch;
        case actions.ERROR:
            // TODO:
            return;
        default:
            console.error(`unknown action ${type} in ticket meta reducer`);
    }
}

export default reducer;