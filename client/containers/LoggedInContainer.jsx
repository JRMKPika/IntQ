import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Homepage from '../components/Homepage.jsx';
import UserOptions from '../components/UserOptions.jsx';
import SeeQ from '../components/SeeQ.jsx';
import AddQ from '../components/AddQ.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoggedInContainer() {
  // const { username } = props;
  const [selected, setSelected] = useState('home');
  let data = '';
  return (
    <div>
      <SearchBar />
      <UserOptions username={'username'} />

      <Router>
        <div>
          <Link to='/'>
            <button>LOGO</button>
          </Link>
          <Link to='/AddQ'>
            <button>Add Question</button>
          </Link>
          <Link to='/SeeQ'>
            <button>See Questions</button>
          </Link>

          <Switch>
            <Route path='/'>
              <Homepage />
            </Route>
            <Route path='/SeeQ'>
              <SeeQ title={'Questions'} data={data} />
            </Route>
            <Route path='/AddQ'>
              <AddQ />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default LoggedInContainer;
