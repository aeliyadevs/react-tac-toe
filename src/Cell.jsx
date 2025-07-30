import { useState } from "react";

function Cell(props) {
  const [image, setImage] = useState("");
  // const [isPlayed, setIsPlayed] = useState(false);
  const [notPlayed, setNotPlayed] = useState(true);
  let x = 10;
  console.log(props.activePlayer);

  function setImageSymbol() {
    if (notPlayed) {
      if (props.activePlayer == 1) {
        setImage("./circle.svg");
        props.changeActivePlayer(2);
      } else {
        setImage("./x.svg");
        props.changeActivePlayer(1);
      }
      setNotPlayed(false);
    }
  }
  return (
    <div className="cell" onClick={setImageSymbol}>
      <img src={image} />
    </div>
  );
}

export default Cell;
