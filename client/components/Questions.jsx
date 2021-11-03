import React, { useState } from 'react';
import Card from './Card.jsx';

function Questions(props) {
  const {data,user}  = props;
  if(!Array.isArray(data)) return <div> </div>;
  return (
    <div className='questionsWrapper'>
      {data.map((el, index) => (
        <Card key={'card'+ index} id={'card'+ index} data={el} user={user} />
      ))}
    </div>
  );
}

export default Questions;
