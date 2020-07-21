
import React, { createContext, useState } from 'react';

const AuthUserContext = createContext(null);

const AuthUserProvider = (props) => {
    const [username, setUsername] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    // function exposed to consumes to set data (auth helper)
    const setUserData = (username, accessToken) => {
        setUsername(username);
        setAccessToken(accessToken);
    }

    return (
        <AuthUserContext.Provider value={ {
            username: username,
            accessToken: accessToken,
            setUserData: setUserData
        } }>
            {props.children}
        </AuthUserContext.Provider>
    );
}

export { AuthUserContext, AuthUserProvider };