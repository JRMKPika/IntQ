import React from 'react';

function AddQ() {
  function addQuestion() {
    
  }

  return (
    <div className='addQWrapper'>
      <h1 id='title'>Add a new question</h1>
      <form>
        <div className='form'>
          <label>Question: </label>
          <input placeholder='i.e. What is a promise?'></input>
          <label>Company: </label>
          <input placeholder='i.e. Google'></input>
          <label>Question type: </label>
          <select id="questionTypes">
            <option value='algo'>Algo</option>
            <option value='behavioral'>Behavioral</option>
            <option value='general'>General</option>
            <option value='system design'>System design</option>
            <option value='technology'>Technology</option>
          </select>
          <label>Rol: </label>
          <input placeholder='i.e. Front End Senior Software Engineer'></input>
        </div>
      </form>
      <div className='submitButtons'>
      <button onClick={addQuestion} >Submit and finish</button>
      <button onClick={addQuestion} >Submit and continue adding</button>
      </div>
    </div>
  );
}
export default AddQ;
