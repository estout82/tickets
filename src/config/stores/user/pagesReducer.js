
import { copyAndSet } from '../../util';

export const actions = {
    FETCH_SINGLE_START: 'FETCH_SINGLE_START',
    FETCH_SINGLE_SUCESS: 'FETCH_SINGLE_SUCESS',
    FETCH_SINGLE_ERROR: 'FETCH_SINGLE_ERROR',
    FETCH_ALL_START: 'FETCH_ALL_START',
    FETCH_ALL_SUCESS: 'FETCH_ALL_SUCESS',
    FETCH_ALL_ERROR: 'FETCH_ALL_ERROR'
};

const singleFakeResponse = {
    msg: 'sucess',
    data: [
        { 
            firstName: 'Jim',
            lastName: 'Jimmerson',
            organization: 'Granite Bay',
            tags: [],
            department: 'Information Services',
            openTicketCount: 0,
            assetCount: 0,
            itemCount: 0,
            onLoanCount: 1
        },
        {
            firstName: 'Sally',
            lastName: 'McBean',
            organization: 'Midtown',
            tags: [],
            department: 'Childrens',
            openTicketCount: 1,
            assetCount: 0,
            itemCount: 0,
            onLoanCount: 22
        }
    ]
}

const reducer = (state, action) => {
    const page = action.payload.page;
    const dispatch = action.payload.dispatch;
    const response = action.payload.response;

    switch (action.type) {
        case actions.FETCH_SINGLE_START:
            // fetch fake data
            setTimeout(() => {
                dispatch({
                    type: actions.FETCH_SINGLE_SUCESS,
                    payload: {
                        page: page,
                        response: singleFakeResponse
                    }
                })
            }, 1000);

            return copyAndSet(state, page, { status: 'loading' });
        case actions.FETCH_SINGLE_SUCESS:
            return copyAndSet(state, page, { status: 'done', users: response.data });
        case actions.FETCH_SINGLE_ERROR:
            // TODO:
            return;
        case actions.FETCH_ALL_START:
            // TODO:
            return;
        case actions.FETCH_ALL_SUCESS:
            // TODO:
            return;
        case actions.FETCH_ALL_ERROR:
            // TODO:
            return;
        default:
            // TODO:
            return;
    }
}

export default reducer;