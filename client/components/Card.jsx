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
  return (
    <div className='totalCard'>
      <div className='card'>
        Card {data.id}
        <h1>{data.question}</h1>
        <p>
          {data.type}--{data.role}
        </p>
        <p>
          {data.username}--{data.date}
        </p>
      </div>
    
        {data.username === user.name ? (
          <span onClick={() => {}}>
            <FontAwesomeIcon id='exitIcon' icon={faWindowClose} />
          </span>
        ) : (
          ''
        )}
  
    </div>
  );
}

export default Card;
