import React, { useState } from 'react';

function SearchBar( params ) {

  return (
    <div className='searchBarWrapper'>
      <select className='searchOptions' id='searchOption'>
            <option value='anyKeyword'>Keyword Search</option>
            <option value='company'>Company</option>
            <option value='type'>Question Type</option>
            <option value='role'>Role</option>
          </select>
      <input id='searchText' placeholder='Search'></input>
    </div>
    
  );
}
export default SearchBar;
