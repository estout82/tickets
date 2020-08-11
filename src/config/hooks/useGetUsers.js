
import { useState, useEffect} from 'react';

const fakeUsers = [
    { 
        firstName: 'Matt',
        lastName: 'Cantu',
        organization: 'Ministry Support',
        tags:  [ 'green', 'yellow' ],
        department: 'IT',
        openTicketCount: 3,
        assetCount: 4,
        itemCount: 1,
        onLoanCount: 0
    }
]

const useGetUsers = () => {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers(fakeUsers);
            setLoading(false);
        }, 3000);
    }, []);

    return {
        users,
        loading,
        error: false
    }
}

export default useGetUsers;