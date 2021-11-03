import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Questions from '../components/Questions.jsx';
import Login from '../components/Login.jsx';
import Homepage from '../components/Homepage.jsx';
import UserOptions from '../components/UserOptions.jsx';
import SeeQ from '../components/SeeQ.jsx';
import AddQ from '../components/AddQ.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoggedInContainer(props) {
  const { user } = props;
  const [selected, setSelected] = useState('home');
  const [data, setData] = useState('');
  const [dropdown, setDropdown] = useState(false);

  function getData(link) {
    // GET request using fetch inside useEffect React hook
    fetch(link)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  return (
    <div className='loggedInContainerWrapper'>
      <SearchBar setData={setData}/>
      <UserOptions
        username={user.name}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      <Router>
        <div>
          <Link to='/'>
            <button id='logo'>IntQ</button>
          </Link>
          <div className='dropdown'>
            <Link to='/myQuestions'>
              {dropdown ? (
                <div className='dropdown'>
                  <button>My questions</button>
                </div>
              ) : (
               <div></div>
              )}
            </Link>
          </div>
          <div id='AddOrSee'>
            <Link to='/AddQ'>
              <span>
                <FontAwesomeIcon id='plusIcon' icon={faPlus} />
              </span>
            </Link>
            <Link to='/SeeQ'>
              <span onClick={getData('/allQ')}>
                <FontAwesomeIcon id='seeIcon' icon={faListAlt} />
              </span>
            </Link>
          </div>
          <Switch>
            <Route path='/SeeQ'>
              <SeeQ title='All Questions' data={data} user={user}/>
            </Route>
            <Route path='/myQuestions'>
              <SeeQ title='My Questions' data={data} user={user}/>
            </Route>
            <Route path='/AddQ'>
              <AddQ user={user} />
            </Route>
            <Route path='/'>
              <Homepage user={user} />
            </Route>
            <Route path='/search'>
              <SeeQ title='Searched Questions' data={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default LoggedInContainer;
