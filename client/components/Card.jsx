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
  const { data, user, id } = props;
  function deleteQ() {
    fetch('/deleteQ', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: data.id }),
    }).catch((err) => console.log('Error while deleting question: ', err));
    let node = document.getElementById(id);
    if (node.parentNode) {
      console.log('deleted?')
      node.parentNode.removeChild(node);
    }
  }

  return (
    <div className='totalCard'>
      <div className='card'>
        <span id='highlight'>{data.question}</span>
        <h4>{data.role}</h4>
        <h5>{data.organization} - Type: {data.type}</h5>
        <h6>{data.date}</h6>
      </div>

      {data.googleid === user.googleId ? (
        <span onClick={deleteQ}>
          <FontAwesomeIcon id='exitIcon' icon={faWindowClose} />
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default Card;
