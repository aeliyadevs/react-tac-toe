import { useState } from "react";

function Cell(props) {
  const [image, setImage] = useState("");
  let x = 10;
  console.log(props.activePlayer);
  function setImageSymbol() {
    console.log(props.changeActivePlayer);
    if (props.activePlayer == 1) {
      setImage("./circle.svg");
      props.changeActivePlayer(2);
    } else {
      setImage("./x.svg");
      props.changeActivePlayer(1);
    }
  }
  return (
    <div className="cell" onClick={setImageSymbol}>
      <img src={image} />
    </div>
  );
}

export default Cell;
