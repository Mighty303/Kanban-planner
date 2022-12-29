import React, { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import '../styles/login.css';
import HomeHeader from '../components/HomeHeader';

const clientId = '1050649615554-rnjdj5a2koosat8o074rtnt5gi3doht2.apps.googleusercontent.com';


const Login = props => {
    useEffect(() => {
        const initClient = () => { // initialize client on every render
            gapi.auth2.init({
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
        <div className="login-background">
            <HomeHeader />
            <div className="login-box centered">
                <h1 id="login-text">Please login</h1>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Log in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
    );
};

export default Login;