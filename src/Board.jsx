import { useEffect, useState } from "react";
import Cell from "./Cell";

function Board() {
  const [player, setPlayer] = useState("Player 1");
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  // initial state of the board
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

  // win chances
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

  // function to decide result
  function decideWinner() {
    // check if we have a winner
    winCases.forEach((item) => {
      const [a, b, c] = item;
      if (
        boardState[a] != null &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        console.log("Winner: ", boardState[a]);
        setWinner(boardState[a]);
      }
    });

    //check if the game is DRAW
    if (boardState.every((cell) => cell !== null) && !winner) {
      setIsDraw(true);
    }
  }

  // function to alternate between two players
  function changePlayer(newPlayer) {
    setPlayer(newPlayer);
  }

  // function to update board on each cell click
  function updateBoardState(cellNum, symbol) {
    let newBoardState = Array.from(boardState);
    newBoardState[cellNum] = symbol;
    setBoardState(newBoardState);
  }

  // function to restart the game
  function restartGame() {
    setBoardState([null, null, null, null, null, null, null, null, null]);
    setPlayer("Player 1");
    setWinner(null);
    setIsDraw(false);
    setReset(true);
  }

  // function to be executed after cell is reset
  function resetCallback() {
    setReset(false);
  }

  // check for win case on each boardState update
  useEffect(() => {
    decideWinner();
  }, [boardState]);

  return (
    <>
      <h1 className="title">Tic Tac Toe</h1>
      <div className="turn">Turn: {player}</div>
      <div className="grid">
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={0}
          col={0}
          cellNum={0}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={0}
          col={1}
          cellNum={1}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={0}
          col={2}
          cellNum={2}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={1}
          col={0}
          cellNum={3}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={1}
          col={1}
          cellNum={4}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={1}
          col={2}
          cellNum={5}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={2}
          col={0}
          cellNum={6}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={2}
          col={1}
          cellNum={7}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
        <Cell
          activePlayer={player}
          changeActivePlayer={changePlayer}
          row={2}
          col={2}
          cellNum={8}
          updateBoard={updateBoardState}
          reset={reset}
          resetCallback={resetCallback}
        />
      </div>
      <div className="controls">
        <button onClick={restartGame}>Restart Game</button>
      </div>

      {/* Show winner */}
      {winner && (
        <div className="winner-modal animate__animated animate__fadeIn">
          <div className="winner-text">Winner</div>
          <div className="winner-symbol animate__animated animate__bounceIn">
            {winner === "O" ? (
              <img
                src="./circle.svg"
                className="symbol animate__animated animate__zoomIn"
              />
            ) : (
              <img
                src="./x.svg"
                className="symbol animate__animated animate__zoomIn"
              />
            )}
          </div>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}

      {/* show in case of DRAW */}
      {isDraw && (
        <div className="winner-modal animate__animated animate__fadeIn">
          <div className="winner-text">Draw</div>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </>
  );
}
export default Board;
