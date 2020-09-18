
import React from 'react';
import Loading from '../Loading';
import Error from '../Error';

export const statuses = {
    loading: { status: 'loading'},
    error: { status: 'error' },
    done: { status: 'done' }
}

const useLoading = () => {
    const render = (renderDoneState, status) => {
        console.log(status);

        switch (status.status) {
            case 'done':
                return renderDoneState();
            case 'loading':
                return (
                    <Loading />
                );
            case 'error':
                return (
                    <Error msg={status.msg} />
                );
            default:
                console.error(`error: unknown status ${status.status} in useLoading hook`);
                return <></>;
        }
    } 

    return render;
}

export default useLoading;