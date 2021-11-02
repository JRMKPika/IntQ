import React, { useState } from 'react';

function Login(props) {
  const { setLoggedIn } = props;
  return (
    <div className='loginWrapper'>
      <div className='loginSquare'>
        <h1 id='logo'>IntQ</h1>
        <button onClick={() => setLoggedIn(true)}>Log </button>
      </div>
    </div>
  );
}

export default Login;
