# Front-End study

## Youtube - 노마드 코더 Nomad Coders
***https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ/featured***

### JS Basics
***https://www.youtube.com/watch?v=wUHncG3VwPw&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK***

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
    title.className = "clicked";    // yes
    title.style.color = "#6471bb";  // no
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
  `${title} is title`
  ```
  
- Element의 class를 조작할 때에는 className으로 조작하기보다는, classList로 조작하는 것이 편하다.
  ```javascript
  title.className = "clicked";    // no
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
---
### 참고
- [자바스크립트] 성능을 높이는 코드 스타일
  - ***https://12bme.tistory.com/134***
  
- 화살표 함수
  - ***https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98***
  
- Javascript에서 String을 Number타입으로 바꾸기
  - ***https://silvesteryan.tistory.com/9***
