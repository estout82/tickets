
import { useState } from 'react';

const usePagenation = (nPages) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [numPages, setNumPages] = useState(nPages);

    return {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
        numPages: numPages,
        setNumPages: setNumPages
    }
}

export default usePagenation;