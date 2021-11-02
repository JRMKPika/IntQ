import React, { useState } from 'react';
import LoggedInContainer from './LoggedInContainer.jsx';
import Login from '../components/Login.jsx';
function MainContainer() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div>
      {loggedIn ? (
        <LoggedInContainer user={user} />
      ) : (
        <Login setLoggedIn={setLoggedIn} setUser={setUser} />
      )}
    </div>
  );
}
export default MainContainer;
