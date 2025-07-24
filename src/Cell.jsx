import { useState } from "react";

function Cell(props) {
  const [image, setImage] = useState("");
  function changeImage() {
    setImage("./circle.svg");
  }
  return (
    <div className="cell" onClick={changeImage}>
      <img src={image} />
    </div>
  );
}

export default Cell;
