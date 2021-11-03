import React from 'react';
import Questions from './Questions.jsx';

function SeeQ(props) {
  const { title, data, user } = props;
  console.log(data)
  return (
    <div className='seeQWrapper'>
      <h1> {title}</h1>
      
      <Questions data={data} user={user}/>
      
     
    </div>
  );
}
export default SeeQ;
