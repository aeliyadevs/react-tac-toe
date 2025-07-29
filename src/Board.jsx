import { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [player, setPlayer] = useState(1);
  const [symbol, setSymbol] = useState("circle");

  function changePlayer(newPlayer) {
    setPlayer(newPlayer);
    // if (player == 1) {
    //   setPlayer(2);
    // } else {
    //   setPlayer(1);
    // }
  }

  return (
    <div className="grid">
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
      <Cell activePlayer={player} changeActivePlayer={changePlayer} />
    </div>
  );
}
export default Board;
