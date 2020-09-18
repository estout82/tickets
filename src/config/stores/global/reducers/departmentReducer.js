
import { copyAndSet } from '../../../util';

export const actions = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCESS: 'FETCH_SUCESS',
    FETCH_ERROR: 'FETCH_ERROR'
};

const fakeResponse = {
    msg: 'sucess',
    data: [
        { name: 'Information Services', shortName: 'is', code: 'MS-1' },
        { name: 'Worship', shortName: 'wrsp', code: 'MS-3' }
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
            }, 10);

            return {...state, status: 'loading'};
        case actions.FETCH_SUCESS:
            let newState = {...state, status: 'done'};
            newState.data = response.data;
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