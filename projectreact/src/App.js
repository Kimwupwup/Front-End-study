import React, {useState} from 'react';
import Tweet from './Tweet';
function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      <Tweet name="Wuppu" message="This is a random tweet"/>
      <Tweet name="John snow" message="This is a random tweet"/>
      <Tweet name="Winter is Comming" message="This is a random tweet"/>
      <Tweet name="Amazon" message="?????"/>
    </div>
  );
}

export default App;