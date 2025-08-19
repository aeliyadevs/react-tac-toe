import { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [player, setPlayer] = useState(1);
  const [symbol, setSymbol] = useState("circle");
  const [boardState, setBoardState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function decideWinner() {
    winCases.forEach((item) => {
      const [a, b, c] = item;

      if (
        boardState[a] != null &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        console.log("Winner");
      }
    });
  }

  function changePlayer(newPlayer) {
    setPlayer(newPlayer);
    // player = newPlayer;
    // if (player == 1) {
    //   setPlayer(2);
    // } else {
    //   setPlayer(1);
    // }
  }

  function updateBoardState(cellNum, symbol) {
    // blank
    let newBoardState = Array.from(boardState);
    newBoardState[cellNum] = symbol;
    setBoardState(newBoardState);
  }

  return (
    <div className="grid">
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={0}
        col={0}
        cellNum={0}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={0}
        col={1}
        cellNum={1}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={0}
        col={2}
        cellNum={2}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={1}
        col={0}
        cellNum={3}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={1}
        col={1}
        cellNum={4}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={1}
        col={2}
        cellNum={5}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={2}
        col={0}
        cellNum={6}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={2}
        col={1}
        cellNum={7}
        updateBoard={updateBoardState}
      />
      <Cell
        activePlayer={player}
        changeActivePlayer={changePlayer}
        row={2}
        col={2}
        cellNum={8}
        updateBoard={updateBoardState}
      />
    </div>
  );
}
export default Board;
