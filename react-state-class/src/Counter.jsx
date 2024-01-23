import { useState } from "react";

export default function Counter() {
  let [conut, setCount] = useState(0);

  let incCount = () => {
    setCount(conut + 1);
  };

  return (
    <div>
      <h3>Count ={conut}</h3>
      <button onClick={incCount}>Count</button>
    </div>
  );
}
