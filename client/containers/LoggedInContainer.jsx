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
  const [searchReq, setSearchReq] = useState([]);
  function getData(link) {
    // GET request using fetch inside useEffect React hook
    fetch(link)
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  function getMyData(link) {
    // GET request using fetch inside useEffect React hook
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({googleid : user.googleId}) 
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.rows)
      }
      );
  }

  return (
    <div className='loggedInContainerWrapper'>
      <SearchBar 
      setData={setData}
      setSearchReq={setSearchReq}
      />
      <UserOptions
        username={user.name}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />

      <Router>
        <div className='search'>
          <Link to='/search'>
              <button onClick={()=>getData(searchReq)}>search</button>
          </Link>
        </div>
        <div className='logoWithOptions'>
          <Link to='/'>
            <button id='logo'>IntQ</button>
          </Link>
          <div id='AddOrSee'>
            <Link to='/AddQ'>
              <span>
                <FontAwesomeIcon id='plusIcon' icon={faPlus} />
              </span>
            </Link>
            <div className='seeQ'>
              <Link to='/SeeQ'>
                <span onClick={()=>getData('/allQ')}>
                  <FontAwesomeIcon id='seeIcon' icon={faListAlt} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/myQuestions'>
            {dropdown ? (
              <div className='dropdown'>
                <button onClick={()=>getMyData('/myQ')} >My questions</button>
              </div>
            ) : (
              <div></div>
            )}
          </Link>
        </div>

        <Switch>
          <Route path='/SeeQ'>
            <SeeQ title='All Questions' data={data} user={user} />
          </Route>
          <Route path='/myQuestions'>
            <SeeQ title='My Questions' data={data} user={user} />
          </Route>
          <Route path='/AddQ'>
            <AddQ user={user} />
          </Route>
          <Route path='/search'>
            <SeeQ title='Searched Questions' data={data} user={user}/>
          </Route>
          <Route path='/'>
            <Homepage user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default LoggedInContainer;
