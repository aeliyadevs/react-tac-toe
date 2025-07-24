import { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [count, setCount] = useState(0);

  function buttonClick() {
    console.log("Clicked");
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      {/* <div className="grid">
        <div className="grid-item">
          <img src="./circle.svg" />
        </div>
        <div className="grid-item">
          <img src="./x.svg" />
        </div>
        <div className="grid-item">
          <img src="./circle.svg" />
        </div>
        <div className="grid-item">
          <img src="./x.svg" />
        </div>
        <div className="grid-item">
          <img src="./circle.svg" />
        </div>
        <div className="grid-item">
          <img src="./x.svg" />
        </div>
        <div className="grid-item">
          <img src="./circle.svg" />
        </div>
        <div className="grid-item">
          <img src="./x.svg" />
        </div>
        <div className="grid-item">
          <img src="./circle.svg" />
        </div>
      </div> */}
      <Board />
      <div className="counter">{count}</div>
      <button onClick={buttonClick}>Click Me</button>
    </div>
  );
}

export default App;
