import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Login = (props) => {
  const { setLoggedIn, setUser } = props;
  const [start, setStart] = useState(false);

  const LoginWithGoogle = (response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const googleId = response.profileObj.googleId;

    const user = {
      googleId: googleId,
      name: name,
      email: email,
    };
    console.log("Inside loginwithGoogle");
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
        console.log('An error was found while signing in via google : ', err)
      );
  };

  return (
    <div className='loginWrapper'>
      <div className='loginSquare'>
        <h1 id='logo'>IntQ</h1>
        <span id='subtitle'>The perfect place to keep track of your interview questions.</span>
        <button id='start' onClick={()=> setStart(true)}> Start</button>
        {start ? 
        <div className='arrowAndGoogle'>
         <FontAwesomeIcon id='arrowIcon' icon={faArrowDown} />
        <GoogleLogin
          clientId='32052476761-bgrijnll26kdtoi1mt522414bbe1f70r.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={LoginWithGoogle}
          onFailure={LoginWithGoogle}
          cookiePolicy={'single_host_origin'}
        />  </div>: ''}
       
      </div>
    </div>
  );
};

export default Login;
