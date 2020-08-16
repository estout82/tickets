
// TODO: if this is slow, fetch partial data on bluk and all on single
//  - for now we will just fetch all data at once

// TODO: convert all actions to little functions

import { copyAndSet } from '../../../util';

export const actions = {
    FETCH_SINGLE_START: 'FETCH_SINGLE_START',
    FETCH_SINGLE_SUCESS: 'FETCH_SINGLE_SUCESS',
    FETCH_SINGLE_ERROR: 'FETCH_SINGLE_ERROR',
    FETCH_PAGE_START: 'FETCH_PAGE_START',
    FETCH_PAGE_SUCESS: 'FETCH_PAGE_SUCESS',
    FETCH_PAGE_ERROR: 'FETCH_PAGE_ERROR',
    PATCH_START: 'PATCH_START',
    PATCH_SUCESS: 'PATCH_SUCESS',
    PATCH_ERROR: 'PATCH_ERROR'
};

const fakeResponse = {
    msg: 'sucess',
    data: { }
};

const fakePageResponse = {
    msg: 'sucess',
    data: {
        1: {
            status: 'done',
            data: {
                id: '1',
                firstName: 'Jim',
                lastName: 'Jimmerson',
                organization: 'Granite Bay',
                tags: [],
                department: 'Information Services',
                openTicketCount: 0,
                assetCount: 0,
                itemCount: 0,
                onLoanCount: 1
            }
        },
        2: {
            status: 'done',
            data: {
                id: '2',
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
        }
    }
}

const fakePatchResponse = {
    msg: 'sucess',
    data: {
        id: '983hjfnjabs'
    }
};

const reducer = (state, action) => {
    const page = action.payload.page;
    const dispatch = action.payload.dispatch;
    const response = action.payload.response;
    const dataToSet = action.payload.dataToSet;
    const id = action.payload.id;
    const onComplete = action.payload.onComplete;
    let newState = {...state}; // TODO: convert all to work like this

    switch (action.type) {
        case actions.FETCH_SINGLE_START:
            // fetch fake data
            setTimeout(() => {
                dispatch({
                    type: actions.FETCH_SINGLE_SUCESS,
                    payload: {
                        page: page,
                        response: fakeResponse
                    }
                })
            }, 1000);

            alert('shouldn\'t be here');

            return copyAndSet(state, page, { status: 'loading' });
        case actions.FETCH_SINGLE_SUCESS:
            return copyAndSet(state, page, { status: 'done', users: response.data });
        case actions.FETCH_SINGLE_ERROR:
            // TODO:
            return;
        case actions.FETCH_PAGE_START:
            // fetch fake data
            setTimeout(() => {
                dispatch({
                    type: actions.FETCH_PAGE_SUCESS,
                    payload: {
                        response: fakePageResponse,
                        page: page
                    }
                });
            }, 1000);

            let newPagesObject = {...state.pages};
            newPagesObject[page] = { status: 'loading' };
            return copyAndSet(state, 'pages', newPagesObject);
        case actions.FETCH_PAGE_SUCESS:
            // copy all user ids on page into array
            const responseDataKeys = Object.keys(response.data);
            const pageUserIds = [...responseDataKeys];
            let stateAfterPageFetch = {...state};

            // update user cache state
            let userObjRefs = {};
            responseDataKeys.forEach(key => {
                stateAfterPageFetch.users[key] = {...response.data[key], status: 'done'};
                userObjRefs[key] = stateAfterPageFetch.users[key];
            });

            // update page state
            
            stateAfterPageFetch.pages[page] = { 
                status: 'done', 
                ids: pageUserIds,
                users: userObjRefs
            };

            return stateAfterPageFetch;
        case actions.FETCH_PAGE_ERROR:
            // TODO:
            return;
        case actions.PATCH_START:
            // if no data to set, return
            if (!dataToSet || Object.keys(dataToSet).length === 0) {
                console.error('dispatched a patch op with no new data');
                return state;
            }

            // send fake request to server
            setTimeout(() => {
                dispatch({
                    type: actions.PATCH_SUCESS,
                    payload: {
                        onComplete: onComplete,
                        id: id,
                        dataToSet: dataToSet,
                        response: fakePatchResponse
                    }
                });
            }, 1000);

            return state;
        case actions.PATCH_SUCESS:
            // since op was sucess, set data in cache
            // TODO: make this better
            let newUserData = {...state.users[id].data};
            Object.assign(newUserData, dataToSet);
            newState.users[id] = newUserData;

            // call on complete and pass in result
            onComplete(response);

            return newState;
        case actions.PATCH_ERROR:
            // TODO:
            return;
        default:
            // TODO:
            return;
    }
}

export default reducer;