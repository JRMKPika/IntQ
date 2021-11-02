import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = (props) => {
  const { setLoggedIn, setUser } = props;

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('The google ID is ', data);
        setUser({name, googleId});
        setLoggedIn(true);
      })
      .catch((err) =>
        console.log('An error was found while singing in via google : ', err)
      );
  };

  return (
    <div className='loginWrapper'>
      <div className='loginSquare'>
        <h1 id='logo'>IntQ</h1>
        <GoogleLogin
          clientId='32052476761-bgrijnll26kdtoi1mt522414bbe1f70r.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={LoginWithGoogle}
          onFailure={LoginWithGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default Login;
