import React, { useState } from 'react';
import LoggedInContainer from './LoggedInContainer.jsx';
import Login from '../components/Login.jsx';

function MainContainer() {
  const [loggedIn, setLoggedIn] = useState(true);
  return <div>{loggedIn ? <LoggedInContainer /> : <Login />}</div>;
}
export default MainContainer;