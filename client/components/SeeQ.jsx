import React from 'react';
import Questions from './Questions.jsx';

function SeeQ(props) {
  const { title, data,user } = props;
  return (
    <div className='seeQWrapper'>
      <h1> {title}</h1>
      <div className='questions'>
      <Questions data={data} user={user}/>
      </div>
     
    </div>
  );
}
export default SeeQ;
