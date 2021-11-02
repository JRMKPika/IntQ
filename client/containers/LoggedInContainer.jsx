import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Questions from '../components/Questions.jsx';
import Login from '../components/Login.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoggedInContainer() {
  const [selected, setSelected] = useState('home');
  let data = '';
  return (
    <Router>
      <div>
        {/* <nav> */}
        {/* <ul> */}
        <Link to='/myQuestions'>
          <button>Click Me!</button>
        </Link>
        {/* <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li> */}
        {/* </ul> */}
        {/* </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/myQuestions'>
            <Questions title={'My questions'} data={data} />
          </Route>
          <Route path='/allQuestions'>
            <Questions title={'Questions'} data={data} />
          </Route>
          {/* <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default LoggedInContainer;
