import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

//for each data render card with attributes

function Homepage(props) {
  // fetch reqest to back end gets 10 newest questions
  const [topTen, setTopTen] = useState([]);
  const { user } = props;
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('/newestTen')
      .then((response) => response.json())
      .then((data) => {
      setTopTen(data)});
  }, []);
  if (!topTen) return <div> </div>;
  return (
    <div className='homepage'>
   
      <div className='homepageQ'>
      {topTen.map((el, index) => (
        <Card key={index} data={el} user={user} />
      ))}
      </div>
    </div>
  );
}
export default Homepage;
