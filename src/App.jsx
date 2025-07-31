import React, { useRef, useState } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const [votes, setVotes] = useState([]);

  const handleClick = () => {
    const voterName = inputRef.current.value.trim();
    const selectedCandidate = document.getElementById('candidate-select').value;

    if (!voterName) {
      alert("Please enter your name before voting.");
      return;
    }

    let newVote = {
      id:Date.now(),
      voter: voterName,
      candidate: selectedCandidate,
    }
    console.log(votes)
    console.log(newVote)
    setVotes((prevVotes) => [...prevVotes, newVote]);


    inputRef.current.value = '';
  };

  const countVotes = (candidate) => {
    return votes.filter((vote) => vote.candidate === candidate).length;
  };
const deleteVote = (id) => {
  setVotes((prevVotes) => prevVotes.filter((vote) => vote.id !== id));
};
  const votersFor = (candidate) => {
    return votes
      .filter((vote) => vote.candidate === candidate)
      .map((vote, index) => <li key={index}>{vote.voter} <button onClick={()=>deleteVote(vote.id)}>Delete</button></li>);
  };

  return (
    <div>
      <h1>Class Monitor Vote</h1>

     <div className='input-contianer'> <label>Student Name:</label>
      <input type="text" ref={inputRef} />
<div className='select-btn-container'> <select id="candidate-select">
        <option value="suresh">Suresh</option>
        <option value="deepak">Deepak</option>
        <option value="abhik">Abhik</option>
      </select>

      <button onClick={handleClick} className='vote-btn'>Vote</button></div>
     </div>

      <p className='vote-count'>Total votes: {votes.length}</p>
      <hr />
 <div className='contianer'>
      <div>
        <h2>Suresh</h2>
        <p>Total:- {countVotes('suresh')}</p>
        <ul>{votersFor('suresh')}</ul>
      </div>

      <div>
        <h2>Deepak</h2>
        <p>Total:- {countVotes('deepak')}</p>
        <ul>{votersFor('deepak')} </ul>
      </div>

      <div>
        <h2>Abhik</h2>
        <p>Total:- {countVotes('abhik')}</p>
        <ul>{votersFor('abhik')}</ul>
      </div></div>
    </div>
  );
};

export default App;
