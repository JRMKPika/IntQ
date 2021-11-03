import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function UserOptions(props) {
  const { username,dropdown, setDropdown } = props;
  return (
    <div className='userOptionsWrapper'>
      <h2>{username}</h2>
      <span onClick={() => setDropdown(!dropdown)}>
        <FontAwesomeIcon id='arrowDown' icon={faArrowDown} />
      </span>
    </div>
  );
  }
export default UserOptions;
