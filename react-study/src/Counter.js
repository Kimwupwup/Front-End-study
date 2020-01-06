import React, { useState } from "react";

function Counter() {
  const [cnt, setCnt] = useState(0);
  const increment = () => {
    setCnt(cnt + 1);
  };

  return (
    <div>
      <span>{cnt}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
