
/**
 * This reducer handles fetching meta data to do with users
 * 
 * {
 *  numUserPages: Int
 *  numUsersPerPage: Int
 * }
 */

import { copyAndSet } from '../../util';

export const actions = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCESS: 'FETCH_SUCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}

const fakeResponse = {
    msg: 'sucess',
    data: {
        numUserPages: 1,
        numUsersPerPage: 50
    }
};

const reducer = (state, action) => {
    const response = action.payload.response;
    const dispatch = action.payload.dispatch;

    switch (action.type) {
        case actions.FETCH_START:
            // fake fetch the data
            setTimeout(() => {
                dispatch({
                    type: actions.FETCH_SUCESS,
                    payload: {
                        response: fakeResponse
                    }
                })
            }, 1000);

            return copyAndSet(state, 'status', 'loading');
        case actions.FETCH_SUCESS:
            let newState = copyAndSet(state, 'data', response.data);
            newState.status = 'done';
            return newState;
        case actions.FETCH_ERROR:
            // TODO:
            return;
        default:
            // TODO:
            return;
    }
}

export default reducer;