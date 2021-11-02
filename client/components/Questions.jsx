import React, { useState } from 'react';
import Card from './Card.jsx';

function Questions(props) {
  const [data, setData ] = useState([
    {
      question: 'what?',
      type: 'algo',
      role: 'frycook',
      company: 'facebook',
      username: 'rachel',
      date: '11-11-11',
      id: 1,
    },
    {
      question: 'what?',
      type: 'algo',
      role: 'frycook',
      company: 'facebook',
      username: 'rachel',
      date: '11-11-11',
      id: 1,
    }
  ]);

  return (
    <div className='questionsWrapper'>
      {data.map((el) => (
        <Card key={el.id} data={el} delete={true} />
      ))}
   
    </div>
  );
}

export default Questions;
