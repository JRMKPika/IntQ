import React, { useState } from 'react';

//for each data render card with attributes
// question: data.question,
// type: data.type,
// role: data.role,
// company: data.company,
// username: data.username,
// date: data.date,
// id: data.id
function Card( props ) {
  const {data} = props;
  return (
  <div className='card'>
    Card {data.id}
    <h1>{data.question}</h1> 
    <p>{data.type}--{data.role}</p>
    <p>{data.username}--{data.date}</p>  
  </div>
  )
}

export default Card;
