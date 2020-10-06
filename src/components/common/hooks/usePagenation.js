
import { useState } from 'react';

const usePagenation = (numPages) => {
    const [currentPage, setCurrentPage] = useState(1);

    const prevPage = () => {
        // decrement current page if its greater than 1, otherwise do nothing
        setCurrentPage(c => {
            if (c > 1) return c--;
            return c;
        });
    }

    const nextPage = () => {
        // increment current page if able
        setCurrentPage(c => {
            if (c < numPages) return c++;
            return c; 
        })
    }

    const goToPage = (page) => {
        // set current page if its within acceptable range
        setCurrentPage(c => {
            if (page >= 1 && page <= numPages) return page;
            return c;
        });
    }

    return {
        currentPage,
        numPages,
        prevPage,
        nextPage,
        goToPage
    }
}

export default usePagenation;