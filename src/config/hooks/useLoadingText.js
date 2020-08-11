
import { useState, useRef } from 'react';

const useLoadingText = (props) => {
    const [ text, setText ] = useState('Loading');

    setTimeout(() => {
        if (/[.]{3}/.test(text)) {
            // clear last intervals if exists
            setText('Loading');
        } else {
            setText(text + '.');
        }
    }, 500);

    return text;
}

export default useLoadingText;