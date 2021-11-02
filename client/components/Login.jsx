import React from 'react';
import {GoogleLogin} from 'react-google-login';


const Login = () => {

    const LoginWithGoogle = (response) => {
        console.log("The name in the response from Google is ", response.profileObj.name);
        console.log("The email in the response from Google is ", response.profileObj.email);
        console.log("The googleID in the response from Google is ", response.profileObj.googleId);

        const name = response.profileObj.name;
        const email = response.profileObj.email;
        const googleId = response.profileObj.googleId;

        //add code to change the sign in state
        const user = {
            googleId: googleId,
            name: name,
            email: email,
        };
        fetch(`/loginUser`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("User is logged in ( from Login.jsx)");
            //change the state if not done already"
        })
        .catch( (err) => console.log("An error was found while singing in via google : ", err))
      };

return (
            <div>
           <GoogleLogin
            clientId='32052476761-bgrijnll26kdtoi1mt522414bbe1f70r.apps.googleusercontent.com'
            buttonText='Login with Google'
            onSuccess={LoginWithGoogle}
            onFailure={LoginWithGoogle}
            cookiePolicy={'single_host_origin'}
            />
            <div>hello im from googlelogin</div>
            </div>
    )
}


export default Login;