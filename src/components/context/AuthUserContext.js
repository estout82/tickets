
import React, { createContext, useState } from 'react';

const AuthUserContext = createContext(null);

const AuthUserProvider = (props) => {
    const [accessToken, setAccessToken] = useState(null);

    // function exposed to consumes to set data (auth helper)
    const setUserData = (username, accessToken) => {
        setAccessToken(accessToken);
    }

    return (
        <AuthUserContext.Provider value={ {
            firstName: 'Steve',
            lastName: 'Joe',
            _id: '5ef6936f71a9e87d80122bba',
            accessToken: accessToken,
            setUserData: setUserData
        } }>
            {props.children}
        </AuthUserContext.Provider>
    );
}

export { AuthUserContext, AuthUserProvider };