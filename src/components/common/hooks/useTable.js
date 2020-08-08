
import { useRef } from 'react';

const useTable = () => {
    const wrapperRef = useRef();

    return {
        wrapperRef: wrapperRef
    }
}

export default useTable;