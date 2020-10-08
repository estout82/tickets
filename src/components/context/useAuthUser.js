
import { useContext } from 'react';
import { AuthUserContext } from './AuthUserContext';

export default function useAuthUser() {
    return useContext(AuthUserContext);
}