
import { copyAndSet } from '../../../util';

export const actions = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCESS: 'FETCH_SUCESS',
    FETCH_ERROR: 'FETCH_ERROR'
};

const fakeResponse = {
    msg: 'sucess',
    data: [
        { name: 'Granite Bay Campus', shortName: 'gbc' },
        { name: 'Thriving Churches International', shortName: 'tci' }
    ]
};

const reducer = (state, action) => {
    const dispatch = action.payload.dispatch;
    const response = action.payload.response;

    switch (action.type) {
        case actions.FETCH_START:
            // fetch fake data
            setTimeout(() => {
                dispatch({
                    type: actions.FETCH_SUCESS,
                    payload: {
                        response: fakeResponse
                    }
                });
            }, 200);

            return copyAndSet(state, 'status', 'loading');
        case actions.FETCH_SUCESS:
            let newState = copyAndSet(state, 'status', 'done');
            newState.organizations = response.data;
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