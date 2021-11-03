import React from 'react';
import Card from './Card.jsx'
import Questions from './Questions.jsx'

function SeeQ(props) {
  const { title, data } = props;
  return (
    <div>
      <h1> {title}</h1>
      <Questions data = {data}/>
    </div>
  )

}
export default SeeQ;
