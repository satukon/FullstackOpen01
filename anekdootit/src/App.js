import { useState } from 'react'

const MostVotedAnecdote = ({anecdotes, votes}) => {
  
  let indexOfMostVoted = 0;
  
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > votes[indexOfMostVoted]) {
      indexOfMostVoted = i;
    }
  }

  return (
    <div>
      <p>{anecdotes[indexOfMostVoted]}</p>
      <p>Has {votes[indexOfMostVoted]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const votesArray = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(votesArray);

  const showNextAnectode = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteAnecdote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected]++;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>

      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={showNextAnectode}>Next anecdote</button>

      <h1>Anecdote with the most votes</h1>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App
