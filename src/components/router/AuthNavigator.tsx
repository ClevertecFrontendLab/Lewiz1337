import { PATH } from '@constants/path';
import React from 'react';
import { Navigate, NavigateProps } from 'react-router-dom';

const AuthNavigator: React.FC<NavigateProps> = () => {
    const [token, setToken] = React.useState<string>();
    React.useLayoutEffect(() => {
        const jsonToken = localStorage.getItem('jwtToken');
        if (jsonToken) {
            const token = JSON.parse(jsonToken);
            if (token) {
                setToken(token);
            }
        }
    }, []);

    return (
        <>
            {token && <Navigate to={PATH.main} />}
            {!token && <Navigate to={PATH.auth} />}
        </>
    );
};

export default AuthNavigator;
