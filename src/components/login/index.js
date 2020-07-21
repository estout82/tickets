
// TODO: make this look better ?
// TODO: set the username in userAuth context

import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Page from '../common/Page';
import FormInput from '../common/FormInput';
import Button from '../common/Button';
import Logo from './bayside-b.jpg';
import * as constants from '../../config/constants';
import Banner from '../common/Banner';
import { AuthUserContext } from '../context/AuthUserContext';
import { Redirect } from 'react-router-dom';

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
    font-size: 30pt;
    padding: 0 0 50px 0;

    color: ${ props => props.theme.textColorOne };

    h1 {
        display: inline-block;
        font-size: 30pt;
        font-weight: 400;
    }

    span {
        font-weight: 100;
    }

    img {
        margin-left: 50px;
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: ${ props => props.theme.smallRound };
    }
`;

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    min-width: 500px;
    min-height: 300px;
    border-radius: ${ props => props.theme.meduimRound };
    box-shadow: ${ props => props.theme.largeShadow };
    padding: 20px 20px 30px 20px;
    color: ${ props => props.theme.textColorOne };

    h3 {
        font-weight: 200;
        font-size: ${ props => props.theme.largeHeaderSizeFont };
        margin: 0;
        text-align: center;
        padding-bottom: 10px;
    }
`;

const ErrorWrapper = styled.div`
    padding: 10px;
`;

const Login = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [formValid, setFormValid] = useState(false);
    const [status, setStatus] = useState({ error: false, msg: null, redirect: null });
    const authUser = useContext(AuthUserContext);

    const resetForm = () => {
        setUsername('');
        setPassword('');
    }

    const resetErrorState = () => {
        setStatus({
            error: false,
            msg: null
        });
    }

    // event handlers --------------------

    // executed when login button is clicked
    const onLogin = () => {
        const endpoint = "/api/login";
        const headers = new Headers();
        const options = {
            method: 'GET',
            credentials: 'same-origin'
        };

        // only proceed if form is valid
        if (formValid === false) {
            alert('form is not valid');
            return;
        }

        // TODO: reset form
        resetForm();

        // setup credentials for transfer
        const credentials = Buffer.from(username + ':' + password).toString('base64');

        // setup headers
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('X-Login', credentials);
        options.headers = headers;

        // make request
        fetch(endpoint, options)
        .then((response) => {
            if (response.status === 200) {
                // return json body from response
                return response.json();
            } else if (response.status === 404) {
                // user was not found in db
                setStatus({
                    error: true,
                    msg: 'User was not found'
                });
            } else if (response.status === 403) {
                // set error status to display message
                setStatus({
                    error: true,
                    msg: 'Username or password is invalid'
                });
            } else if (response.status === 500) {
                setStatus({
                    error: true,
                    msg: 'Server error occured while logging in'
                });
            }
        })
        .then((json) => {
            // TODO: find a better flow (throw errors?)

            // make sure json isnt undefined before proceeding
            if (!json) {
                return;
            }

            const data = json.data;

            authUser.setUserData('placeholder', data.token);

            // TODO: take a look at the security of this...
            let newStatus = {...status};
            
            if (data.userType === 'admin' || data.userType === 'tech') {
                newStatus.redirect = '/admin';
            }  else {
                newStatus.redirect = '/portal';
            }

            setStatus(newStatus);
        })
        .catch((error) => {
            // set error status to display message
            setStatus({
                error: true,
                msg: 'A network error occurred while logging in'
            });
        });
    }

    // executed when error banner is closed
    const onErrorBannerClose = () => {
        resetErrorState();
    }

    // validators -------------------------------------------

    // requires user to enter a username
    const usernameValidator = (value) => {
        if (value === constants.EMPTY_STRING ||
            value == null) {
            setFormValid(false);
            return { msg: 'Please enter your username' }
        } else {
            setFormValid(true);
            return true;
        }
    }

    // requires user to enter a password
    const passwordValidator = (value) => {
        if (value === constants.EMPTY_STRING ||
            value == null) {
                setFormValid(false);
            return { msg: 'Please enter your password' }
        } else {
            setFormValid(true);
            return true;
        }
    }

    return (
        <>
            {
                status.redirect ?
                <Redirect from='/login' to={status.redirect} />
                : null
            }
            <Page direction="column">
                {
                    status.error ?
                    <Banner onClose={ onErrorBannerClose }>
                        <ErrorWrapper>
                            { status.msg }
                        </ErrorWrapper>
                    </Banner> 
                    : null
                }
                <Header>
                    <h1>
                        Bayside <span>IT <br />Helpdesk</span>
                    </h1>
                    <img alt="Logo" src={Logo} />
                </Header>
                <Content>
                    <FormWrapper>
                        <h3>Login</h3>
                        <FormInput boundSetter={ setUsername } validator={ usernameValidator }
                        name="Username" value={ username } />
                        <FormInput boundSetter={ setPassword } validator={ passwordValidator }
                        name="Password" type="password" value={ password } />
                        <Button onClick={ onLogin } marginRight="0">Login</Button>
                    </FormWrapper>
                </Content>
            </Page>
        </>
    );
}

export default Login;