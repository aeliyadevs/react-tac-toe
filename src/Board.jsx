import Cell from "./Cell";

function Board() {
  return (
    <div className="grid">
      <Cell image="./circle.svg" />
      <Cell image="./x.svg" />
      <Cell image="./vite.svg" />
      <Cell image="./x.svg" />
      <Cell image="./vite.svg" />
      <Cell image="./x.svg" />
      <Cell image="./x.svg" />
      <Cell image="./x.svg" />
      <Cell image="./x.svg" />
    </div>
  );
}
export default Board;
