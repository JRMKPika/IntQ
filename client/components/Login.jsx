import React from 'react';
import {GoogleLogin} from 'react-google-login';


const Login = (props) => {

    const { setLoggedIn } = props;

    const LoginWithGoogle = (response) => {
        const name = response.profileObj.name;
        const email = response.profileObj.email;
        const googleId = response.profileObj.googleId;

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
            if(data ==1){
            setLoggedIn(true);
            }
            else
            throw "User was neither added nor found in the DB. Check the logs";
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