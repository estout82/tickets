
import { LOADING_OBJ, DONE } from '../../util';

export const actions = {
    FETCH_PAGE: 'FETCH_PAGE',
    FETCH_PAGE_SUCESS: 'FETCH_PAGE_SUCESS',
    FETCH_PAGE_ERROR: 'FETCH_PAGE_ERROR',
    FETCH_SINGLE: 'FETCH_SINGLE',
    FETCH_SINGLE_SUCESS: 'FETCH_SINGLE_ERROR',
    FETCH_SINGLE_ERROR: 'FETCH_SINGLE_ERROR'
};

const fakeResponses = {
    0: {
        msg: 'sucess',
        data: {
            id: 0,
            title: 'Ticket #1'
        }
    },
    1: {
        msg: 'sucess',
        data: {
            id: 1,
            title: 'Ticket #2'
        }
    },
    2: {
        msg: 'sucess',
        data: {
            id: 2,
            title: 'Ticket #3'
        }
    },
    3: {
        msg: 'sucess',
        data: {
            id: 3,
            title: 'Ticket #4'
        }
    },
    4: {
        msg: 'sucess',
        data: {
            id: 4,
            title: 'Ticket #5'
        }
    }
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.FETCH_SINGLE:
            // fetch fake data
            setTimeout(() => {
                payload.dispatch({
                    type: actions.FETCH_SINGLE_SUCESS,
                    payload: {
                        response: fakeResponses[payload.id]
                    }
                })
            }, 500);
            let a = {...state};
            a[payload.id] = LOADING_OBJ;
            return a;
        case actions.FETCH_SINGLE_SUCESS:
            let b = {...state};
            b[payload.response.data.id] = payload.response.data;
            b[payload.response.data.id].status = DONE;
            return b;
        case actions.FETCH_SINGLE_ERROR:
            // TODO:
            return;
        default:
            console.error(`Unknown actyion ${type} in ticket reducer`);
    }
}

export default reducer;