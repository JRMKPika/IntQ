import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery ] = useState([]);
  function search() {
    const searchOption = document.querySelector('#searchOption').value;
    const searchText = document.querySelector('#searchText').value;
    fetch(`/search/${searchOption}/${searchText}`)
      .then((response) => response.json())
      .then((data) => setQuery(data));
  }

  async function enterSearch() {
    await search();
    document.querySelector('#searchText').value = '';
    
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
