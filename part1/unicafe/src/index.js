import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function WarningNoComments() {
  return (
    <p>No feedback given</p>
  )
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>
}

function Statistics({ comments }) {

  const good = comments.filter(comment => comment === 'G')
  const neutral = comments.filter(comment => comment === 'N')
  const bad = comments.filter(comment => comment === 'B')

  const positive = good.length / comments.length
  const average = (good.length - bad.length) / comments.length

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good.length}/>
        <StatisticsLine text='neutral' value={neutral.length}/>
        <StatisticsLine text='bad' value={bad.length}/>
        <StatisticsLine text='all' value={comments.length}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive}/> 
      </tbody>       
    </table>
  )
}

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}:</td> 
      <td>{value}</td>
    </tr>
  )
}

export default function App() {

  const [comments, setComments] = useState([])

  function handleGood() {
    setComments(prevComments => ([...prevComments, 'G']))
  }

  function handleNeutral() {
    setComments(prevComments => ([...prevComments, 'N']))
  }

  function handleBad() {
    setComments(prevComments => ([...prevComments, 'B']))
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>

      <h1>Statistics</h1>

      {comments.length === 0
        ? <WarningNoComments />
        : <Statistics comments={comments} />
      }

    </div>
  )
}