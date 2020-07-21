
import React, { useContext, useState, useEffect } from 'react';
import { AuthUserContext } from './context/AuthUserContext';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${ props => props.theme.backgroundColorOne };
    z-index: 1;

    h1 {
        font-size: 36pt;
        font-weight: 300;
        color: ${ props => props.theme.highlightColorOne };
    }
`;

const AuthCheck = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [authFail, setAuthFail] = useState(false);
    const [redirect, setRedirect] = useState();
    const authUser = useContext(AuthUserContext);

    // attempt to get an access token with refresh token
    const loginAttempt = () => {
        const endpoint = '/api/login';

        fetch(endpoint, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('fail');
                // if status is not 200, redirect to login page
                setIsLoading(false);
                setRedirect('/login');
                return Promise.reject();
            }
        })
        .then(json => {
            const data = json.data;
            authUser.setUserData('placeholder', data.token);
            setIsLoading(false);
            
            switch (data.userType) {
                case 'user':
                    setRedirect('/portal');
                    break;
                case 'tech':
                    setRedirect('/admin');
                    break;
                case 'admin':
                    setRedirect('/admin');
                    break;
                default:
                    // TODO: redirect to error
                    break;
            }
        })
        .catch(err => {

        });
    }

    useEffect(() => {
        console.log('attempting login');
        loginAttempt();
    }, []);

    console.log('rendering');

    return (
        <>
            {
                isLoading ?
                <Wrapper>
                    <h1>Loading...</h1>
                </Wrapper> :
                <Redirect to={ redirect } />
            }
        </>
    );
}

export default AuthCheck;