import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
//for each data render card with attributes
// question: data.question,
// type: data.type,
// role: data.role,
// company: data.company,
// username: data.username,
// date: data.date,
// id: data.id
function Card(props) {
  const { data, user } = props;
  function deleteQ() {
    fetch('/deleteQ', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: data.id }),
    }).catch((err) => console.log('Error while deleting question: ', err));
  }

  return (
    <div className='totalCard'>
      <div className='card'>
        <h3>{data.question}</h3>
        <h4>
          {data.type}--{data.role}
        </h4>
        <h5>
          {data.username}--{data.date}
        </h5>
      </div>

      {data.googleId === user.googleId ? (
        <span
          onClick={() => {
            deleteQ;
          }}
        >
          <FontAwesomeIcon id='exitIcon' icon={faWindowClose} />
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default Card;
