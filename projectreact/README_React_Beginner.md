# Dev Ed - React Beginner

## Prepare

1. NodeJs 설치(npm 사용)

2. ```
   npx create-reate-app my-app
   cd my-app
   npm start
   ```

   

## Study

- node_module, public, src 폴더가 있는데, 이주 src 폴더에서 작업한다.

- public 폴더에 index.html 파일이 있다.

- App.js 가 메인 컴포넌트 파일이다.

- js 파일에 HTML 구문을 사용하지만 이는 HTML 이 아니라 reactjs 구문이다.

- class 는 className 으로 표기한다.

- 중활호 {} 는 변수를 사용할 수 있다.

  ```react
  <h1 className={isRed ? "red" : ""}>Change my color!</h1>
  ```

- App.js 에서 return 하면 index.js 에서 ReactDOM에서 render하여 화면에 출력한다.

  ```react
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
  ```

- `export default App;`컴포넌트 이름에 맞게 마지막에 선언해줘야 한다.

- 위와 같이 js(Tweet) 파일을 import 하여 `<Tweet name="John snow" message="This is a random tweet"/>`처럼 컴포넌트를 사용할 수 있다.

- `AddListener` 없이도 버튼 element에 onClick 특성에 함수를 넣어주면, 바로 실행된다.

- `useState` 를 통해 빠르게 변수처리가 가능하다.(추후 설명 추가)

- Tweet.js

  ```react
  import React from 'react';
  import './App.css';
  
  function Tweet ({name, message}) {
      return (
          <div className="tweet">
              <h3>{name}</h3>
              <p>{message}</p>
              <h3>Number of likes</h3>
          </div>
      );
  }
  
  export default Tweet;
  ```