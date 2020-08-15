
import { useState } from 'react';

const useLoadingText = (loaded) => {
    const [ text, setText ] = useState('Loading');

    // only run animation if not loaded
    if (!loaded) {
        setTimeout(() => {
            if (/[.]{3}/.test(text)) {
                // clear last intervals if exists
                setText('Loading');
            } else {
                setText(text + '.');
            }
        }, 500);
    }

    return text;
}

export default useLoadingText;