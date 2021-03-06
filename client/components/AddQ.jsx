import React from 'react';
import { useHistory } from 'react-router-dom';

function AddQ(props) {
  const { user } = props;
  const history = useHistory();
  function addQuestion() {
    const question = document.querySelector('#question').value;
    const company = document.querySelector('#company').value;
    const questionTypes = document.querySelector('#questionTypes').value;
    const role = document.querySelector('#role').value;
    console.log(user.googleId, 'and', user.username);

    fetch(`/addQuestion`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question,
        company,
        questionTypes,
        role,
        googleId: user.googleId,
        username: user.name,
      }),
    }).catch((err) => console.log('Error while adding question: ', err));
  }
  async function AddAndContinue() {
    await addQuestion();
    document.querySelector('#question').value = '';
    document.querySelector('#company').value = '';
    document.querySelector('#questionTypes').value = '';
    document.querySelector('#role').value = '';
    window.alert('Your question was succesfully added.');
  }

  async function AddAndFinish() {
    await addQuestion();
    history.goBack();
    window.alert('Your question was succesfully added.');
  }

  return (
    <div className='addQWrapper'>
      <h1 id='title'>Add a new question</h1>
      <form>
        <div className='form'>
          <label>Question: </label>
          <input id='question' placeholder='i.e. What is a promise?'></input>
          <label>Company: </label>
          <input id='company' placeholder='i.e. Google'></input>
          <label>Question type: </label>
          <select id='questionTypes'>
            <option value='algo'>Algo</option>
            <option value='behavioral'>Behavioral</option>
            <option value='general'>General</option>
            <option value='system design'>System design</option>
            <option value='technology'>Technology</option>
          </select>
          <label>Role: </label>
          <input
            id='role'
            placeholder='i.e. Front End Senior Software Engineer'
          ></input>
        </div>
      </form>
      <div className='submitButtons'>
        <button onClick={AddAndFinish}>Submit and finish</button>
        <button onClick={AddAndContinue}>Submit and continue</button>
      </div>
    </div>
  );
}
export default AddQ;
