import React, { useState } from 'react';

function SearchBar( params ) {
  const [data, setData ] = useState([]);

  async function search() {
    const searchOption = document.querySelector('#searchOption').value;
    const searchText = document.querySelector('#searchText').value;

    await fetch(`/search/${searchOption}/${searchText}`,
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json' },
    }
    )
      .then((response) => response.json())
      .then((resp) => {
        setData(resp)
        console.log('in fetch', resp)
      }
      );
  }

  async function enterSearch() {
    await search();
    document.querySelector('#searchText').value = '';
    console.log(data)

    
  }
  return (
    <div className='searchBarWrapper'>
      <input id='searchText' placeholder='search'></input>
      <select className='searchOptions' id='searchOption'>
            <option value='company'>Company</option>
            <option value='type'>Question Type</option>
            <option value='role'>Role</option>
          </select>
      <button onClick={enterSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
