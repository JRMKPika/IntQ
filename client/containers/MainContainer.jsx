import React, { useState } from 'react';
import LoggedInContainer from './LoggedInContainer.jsx';
import Login from '../components/Login.jsx';
function MainContainer() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? <LoggedInContainer/> : <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
}
export default MainContainer;
