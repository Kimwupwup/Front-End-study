import React, {useState} from 'react';
import Tweet from './Tweet';
function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name: "Wuppu", message: "Hello there."},
    {name: "John", message: "I am John snow"},
    {name: "Traversy", message: "I am awesome."}
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <div className="sec">
        <Tweet name="Wuppu" message="This is a random tweet"/>
        <Tweet name="John snow" message="This is a random tweet"/>
        <Tweet name="Winter is Comming" message="This is a random tweet"/>
        <Tweet name="Amazon" message="?????"/>
      </div>
      
      <div className="sec">
        {users.map(user => (
          <Tweet name={user.name} message={user.message} />
        ))}
      </div>
      
    </div>
  );
}

export default App;