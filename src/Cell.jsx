import { useEffect, useState } from "react";
import "animate.css";

function Cell(props) {
  const [image, setImage] = useState(null);
  const [notMarked, setNotMarked] = useState(true);

  useEffect(() => {
    if (props.reset) {
      setImage(null);
      setNotMarked(true);
      props.resetCallback();
    }
  }, [props.reset]);

  function setImageSymbol() {
    if (notMarked) {
      if (props.activePlayer === "Player 1") {
        setImage("./circle.svg");
        props.changeActivePlayer("Player 2");
        props.updateBoard(props.cellNum, "O");
      } else {
        setImage("./x.svg");
        props.changeActivePlayer("Player 1");
        props.updateBoard(props.cellNum, "X");
      }
      setNotMarked(false);
    }
  }
  return (
    <div className="cell" onClick={setImageSymbol}>
      {image && (
        <img src={image} className="symbol animate__animated animate__zoomIn" />
      )}
    </div>
  );
}

export default Cell;
