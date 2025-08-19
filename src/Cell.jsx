import { useState } from "react";

function Cell(props) {
  const [image, setImage] = useState("-");
  // const [isPlayed, setIsPlayed] = useState(false);
  const [notMarked, setNotMarked] = useState(true);

  function setImageSymbol() {
    if (notMarked) {
      if (props.activePlayer == 1) {
        setImage("./circle.svg");
        props.changeActivePlayer(2);
        props.updateBoard(props.cellNum, "O");
      } else {
        setImage("./x.svg");
        props.changeActivePlayer(1);
        props.updateBoard(props.cellNum, "X");
      }
      setNotMarked(false);
    }
  }
  return (
    <div className="cell" onClick={setImageSymbol}>
      <img src={image} className="symbol" />
      {/* <span className="cell-address">
        {props.row}x{props.col}
      </span> */}
      <span className="cell-address">{props.cellNum + 1}</span>
    </div>
  );
}

export default Cell;
