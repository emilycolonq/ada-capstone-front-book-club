import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    'googKey.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully ✌');
};

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                style={{ marginTop: '100px', blockSize: 5 }}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;