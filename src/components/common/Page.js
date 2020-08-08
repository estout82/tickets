
import React from 'react';

const Page = (props) => {
    const buildWrapperClassName = () => {
        let className = 'flex full-height'

        switch (props.direction) {
            case 'row':
                className = className + ' flex-row';
                break;
            case 'col':
                className = className + ' flex-col';
                break;
            default:
                break;
        }

        return className;
    }

    return (
        <div className={ buildWrapperClassName() }>
            {props.children}
        </div>
    );
}

export default Page;