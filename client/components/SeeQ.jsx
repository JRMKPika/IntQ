import React from 'react';
import Card from './Card.jsx'

function SeeQ() {
  return (
    <div>
      {this.state.data.map(d => (<Card data={d}/>))}
    </div>
  )

}
export default SeeQ;
