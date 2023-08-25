import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

const INITIAL_STATE = {
  selected: 0,
  list: Array(anecdotes.length).fill(0)
}

export default function App({ anecdotes }) {

  // const [selected, setSelected] = useState(0)
  // const [points, setPoints] = useState(Array(anecdotes.length).fill(0)) // vector de 6 ceros

  const [points, setPoints] = useState(INITIAL_STATE)


  function handleChange() {
    const random = Math.floor(Math.random() * anecdotes.length)
    {points.selected === random
      ? handleChange()
      : setPoints({...points, selected: random})
    }
  }

  function handlePoints() {
    const selected = points.selected
    const copy = [...points.list]
    copy[selected]+=1
    setPoints({...points, list: copy})
  }

  function handleReset() {
    setPoints(INITIAL_STATE)
  }

  const indexMoreVoted = points.list.reduce((maxIndex, current, currentIndex, array) => {
    return current > array[maxIndex] ? currentIndex : maxIndex
  }, 0)

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[points.selected]}</p>
      <p>has {points.list[points.selected]} votes</p>
      <Button handleClick={handlePoints} text='vote'/>
      <Button handleClick={handleChange} text='next anecdote'/>
      <Button handleClick={handleReset} text='reset'/>

      <h1>Anecdote whit more votes</h1>
      <p>{anecdotes[indexMoreVoted]}</p>
      <p>has {points.list[indexMoreVoted]} votes</p>

    </div>
  )
}

root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);