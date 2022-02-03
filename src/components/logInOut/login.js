import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
    'googKey.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);  
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px', blockSize: 5 }}
                isSignedIn={true}
            />
            </div>
        );
}

export default Login;