import React, { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '1050649615554-rnjdj5a2koosat8o074rtnt5gi3doht2.apps.googleusercontent.com';


const Login = props => {
    useEffect(() => {
        const initClient = () => { // initialize client on every render
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return(
        <main>
            <div id="wrapper">
                <h1>Please login</h1>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </main>
        
    );
};

export default Login;