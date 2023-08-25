import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



function WarningNotUsed() {
  return <h1>Todavía no se ha usado el contador</h1>
}

function ListOfClicks({ clicks }) {
  return <p>{clicks.join(', ')}</p>
}



export default function App() {

  const [clicks, setClicks] = useState([])

  function handleLeftClick() {
    setClicks(prevClicks => ([...prevClicks, 'L']))
  }

  function handleRightClick() {
    setClicks(prevClicks => ([...prevClicks, 'R']))
  }

  function handleReset() {
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')

  return (
    <div>
      {left.length}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right.length}
      
      <p>
        <button onClick={handleReset}>reset</button>
      </p>

      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0
        ? <WarningNotUsed />
        : <ListOfClicks clicks={clicks} />
      }
    </div>
  );
}
