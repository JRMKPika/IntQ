import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Homepage from '../components/Homepage.jsx';
import UserOptions from '../components/UserOptions.jsx';
import SeeQ from '../components/SeeQ.jsx';
import AddQ from '../components/AddQ.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoggedInContainer() {
  // const { username } = props;
  const [selected, setSelected] = useState('home');
  let data = '';
  return (
    <div className='loggedInContainerWrapper'>
      <SearchBar />
      <UserOptions username={'username'} />

      <Router>
        <div>
          <Link to='/'>
            <span id='logo'>IntQ</span>
          </Link>

          <div id='AddOrSee'>
            <Link to='/AddQ'>
              <span>
                <FontAwesomeIcon id='plusIcon' icon={faPlus} />
              </span>
            </Link>
            <Link to='/SeeQ'>
              <span>
                <FontAwesomeIcon id='seeIcon' icon={faListAlt} />
              </span>
            </Link>
          </div>
          <Switch>
            <Route path='/SeeQ'>
              <SeeQ title={'Questions'} data={data} />
            </Route>
            <Route path='/AddQ'>
              <AddQ />
            </Route>
            <Route path='/'>
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default LoggedInContainer;
