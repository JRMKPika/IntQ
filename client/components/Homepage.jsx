import React, { useState , useEffect} from 'react';
import Card from './Card.jsx';

//for each data render card with attributes

function Homepage() {
  // fetch reqest to back end gets 10 newest questions
  const [topTen, setTopTen] = useState({ data: [{question:'what?', type:'algo', role:'frycook', company:"facebook", username:"rachel", date: '11-11-11', id:1}]})
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('/newestTen')
        .then(response => response.json())
        .then(data => setTopTen({
          question: data.question,
          type: data.type,
          role: data.role,
          company: data.company,
          username: data.username,
          date: data.date,
          id: data.id
        }));
  }, []);
  return (
    <div>
      <h1>Latest Questions!</h1>
      {topTen.data.map((d, index) => (<Card key={d.id} data={d} delete={true}/>))}
    </div>
  )
  
}
export default Homepage;