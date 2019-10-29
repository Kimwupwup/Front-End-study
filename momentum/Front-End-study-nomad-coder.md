# Front-End study

## Youtube - 노마드 코더 Nomad Coders

**_https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ/featured_**

### JS Basics

**_https://www.youtube.com/watch?v=wUHncG3VwPw&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK_**

---

### 필기

- 변수, 객체, 함수

- const, let, var, this... : const를 많이 쓰도록

- for, map, foreach

- arrow function: 익명 함수, 바인딩x)

- HTML이 할 일은 HTML이, CSS가 할 일은 CSS가, JavaScript가 할일은 JavaScript가 할 수 있도록 분리하는 것이 중요하다.

  ```css
  .clicked {
    color: #6471bb;
  }
  ```

  ```javascript
  title.className = "clicked"; // yes
  title.style.color = "#6471bb"; // no
  ```

- JavaScript에서 Event를 생성하고 Listener를 등록할 수 있다.

  ```javascript
  title.addEventListener("click", handleClick);
  ```

- Element를 참조하는 방식은 여러가지가 있지만 주로 사용하는 것이 있다.

  ```javascript
  document.querySelector("#title"); // #을 쓸 경우 id, .을 쓸 경우 class
  document.getElementById("title");
  ```

- string을 합칠 때에는 ( + )연산을 사용할 수 있지만 백틱( \` )을 사용하면 좋다.

  ```javascript
  `${title} is title`;
  ```

- Element의 class를 조작할 때에는 className으로 조작하기보다는, classList로 조작하는 것이 편하다.

  ```javascript
  title.className = "clicked"; // no
  title.classList.add("clicked"); // yes
  
  // 해당 class를 가지고 있는지 없는지 boolean으로 return
  const hasClass = title.classList.contains("clicked");
  
  title.classList.remove("clicked");
  
  // add remove를 단순 반복하는 경우에 toggle을 통해 코드를 줄일 수 있다.
  title.classList.toggle("clicked");
  ```

- CSS 애니메이션 효과

  ```css
  h1 {
    color: #141f5d;
    transition: color 0.5s ease-in-out;
  }
  ```

- localStorage

  ```javascript
  localStorage.setItem("name", "Wuppu");
  localStorage.getItem("name"); // "Wuppu"
  ```

- event.preventDefault() 이벤트의 기본동작을 막는 방법(form입력하였을 때 새로고침되는 기본동작...)

  ```javascript
  event.preventDefault();
  
  ```

- `<span>` 태그 & `<div>` 태그
  `<span>` 태그는 `<div>` 태그처럼 특별한 기능을 갖고있지 않고, CSS와 함께 쓰입니다.
  `<div>` 태그와의 차이점은 `display`속성이 block이 아닌, `inline`이라는 점인데, 이는 CSS display항목에서 세부 정보를 알 수 있습니다.
  이 둘의 차이를 쉽게 설명하자면, `<div>`는 줄 바꿈이 되지만, `<span>`은 줄 바꿈이 되지 않는다는 점입니다.
  (참조) https://ofcourse.kr/html-course/span-%ED%83%9C%EA%B7%B8

- Element 생성 및 삽입

  ```javascript
  // ul(unordered list)에 항목 추가하기
  const li = document.createElement("li"); // list 생성
  const delBtn = document.createElemnt("button"); // list를 제거할 수 있는 버튼 생성
  delBtn.innerText = "X";
  const span = document.createElement("span");
  span.innerText = "text";
  li.appendChild(span); // li에 span 삽입
  li.appendChild(delBtn); // li에 delBtn 삽입
  toDoList.appendChild(li); // ul에 li 삽입
  
  ```

- localStorage의 key, value는 모두 string으로 저장하여야 한다. JSON으로 저장하면 해결할 수 있다.

  ```javascript
  JSON.stringify(toDos); // [{text: "hi", id: 1}] toDos는 array이고 내용물로 객체가 들어간다.
  JSON.parse(loadedToDos); // stringify와 반대로 json포맷 string을 javascript 객체로 디코딩한다.
  
  ```

- forEach, array에 있는 값들을 하나씩 실행한다.

  ```javascript
  parsedToDos.forEach(function(toDo) {
    console.log(toDo.text);
  });
  parsedToDos.forEach(toDo => {
    console.log(toDo.text);
  });
  
  ```

- filter함수는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array를 만든다.(forEach와 유사)

  ```javascript
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id); // parseInt() int형으로 변형
  }); // toDos array에 있는 값들을 하나씩 function을 실행하면서 true인 값만으로 cleanToDos라는 array를 새로 만든다.
  toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  
  ```

- CSS 애니메이션 효과(참고만)

  ```css
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .bgImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn 1s linear;
  }
  
  ```

- 위치정보

  ```javascript
  // 성공했을 때 handle, 실패했을 때 handle 웹에서 수락/거절
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  
  ```

- javascript 객체 생성시 key와 value가 같은 이름을 가지고 있을 경우, 하나만 적어줘도 작동한다.

- fetch API, fetch http 요청을 보내고 응답이 오게되면 then이 작동하게 된다.
  ** https://opentutorials.org/course/3281/20562 생활코딩 **

  ```javascript
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
  
  ```

---

### 참고

- [자바스크립트] 성능을 높이는 코드 스타일

  - **_https://12bme.tistory.com/134_**

- 화살표 함수

  - **_https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98\_**

- Javascript에서 String을 Number타입으로 바꾸기

  - **_https://silvesteryan.tistory.com/9_**

- Open Weather Map (날시 데이터를 가져오기 위한 API)

  - ** https://openweathermap.org/ **
  - 회원가입만 하면 API key를 받고 사용할 수 있음.
