import React, { useState } from 'react';
import Card from './Card.jsx';

//for each data render card with attributes

function Homepage() {
  return (
    <div>
      {this.state.data.map(d => (<Card data={d}/>))}
    </div>
  )
  
}
export default Homepage;