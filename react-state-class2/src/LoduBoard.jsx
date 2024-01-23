import { useState } from "react";

export default function LoduBoard() {
  let [moves, setMoves] = useState({ bleu: 0, yellow: 0, green: 0, red: 0 });

  let updeteBlue = () => {
    setMoves((moves) => {
      console.log(moves.bleu);
      return { ...moves, blue: moves.bleu + 1 };
    });
  };
  return (
    <div>
      <h1>Game Begins! </h1>
      <p>Blue move ={moves.bleu}</p>
      <button style={{ backgroundColor: "blue" }} onClick={updeteBlue}>
        +1
      </button>
      <p>Yellow move ={moves.yellow}</p>
      <button style={{ backgroundColor: "yellow" }}>+1</button>
      <p>Green move ={moves.green}</p>
      <button style={{ backgroundColor: "green" }}>+1</button>
      <p>Red move ={moves.red}</p>
      <button style={{ backgroundColor: "red" }}>+1</button>
    </div>
  );
}
