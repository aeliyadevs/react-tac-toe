import { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
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
    </div>
  );
}

export default App;
