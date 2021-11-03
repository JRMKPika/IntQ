import React, { useState } from 'react';

function SearchBar( params ) {
  const [data, setData ] = useState([]);
  const [searchReq, setSearchReq ] = useState([]);

  async function search() {
    const searchOption = document.querySelector('#searchOption').value;
    const searchText = document.querySelector('#searchText').value;
    setSearchReq(`/search/${searchOption}/${searchText}`)
    console.log(searchReq)
  }

  async function enterSearch() {
    await search();
    document.querySelector('#searchText').value = '';

  }
  return (
    <div className='searchBarWrapper'>
      <select className='searchOptions' id='searchOption'>
            <option value='company'>Company</option>
            <option value='type'>Question Type</option>
            <option value='role'>Role</option>
          </select>
      <input id='searchText' placeholder='Search'></input>
      <button onClick={enterSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
