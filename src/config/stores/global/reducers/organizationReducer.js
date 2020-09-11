
import { copyAndSet, apiRequest } from '../../../util';

export const actions = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCESS: 'FETCH_SUCESS',
    FETCH_ERROR: 'FETCH_ERROR'
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case actions.FETCH_START:
            // fetch data
            const endpoint = 'http://localhost:9000/api/organization/';

            apiRequest(endpoint, {
                method: 'GET'
            })
            .then(response => {
                return response.json();
            })
            .then(json => {
                // if a soft error occurred, dispatch error action
                if (json.status !== 'ok') {
                    payload.dispatch({
                        type: actions.FETCH_ERROR,
                        payload: {
                            response: json
                        }
                    });
                    return;
                }

                // if we are here, fetch sucess... dispatch success action
                payload.dispatch({
                    type: actions.FETCH_SUCESS,
                    payload: {
                        response: json
                    }
                });
            })
            .catch(error => {
                payload.dispatch({
                    type: actions.FETCH_ERROR,
                    payload: {
                        response: error
                    }
                });
            });
            
            return copyAndSet(state, 'status', 'loading');
        case actions.FETCH_SUCESS:
            return {
                ...state,
                status: 'done',
                data: payload.response.data
            };
        case actions.FETCH_ERROR:
            return {
                ...state,
                status: 'error',
                msg: payload.response.msg,
                friendlyMsg: payload.response.friendlyMsg
            };
        default:
            // TODO:
            return state;
    }
}

export default reducer;