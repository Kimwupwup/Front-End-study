# HTML & CSS Basic

- Visual code 를 사용하면 단축키들을 사용할 수 있다. `!`를 칠 경우, 기본 틀을 생성할 수 있다.

- `<head>`태그 부분에 `<title>`, `icon`, `description`, `robots`을 설정할 수 있다.

- 웹 페이지에는 기본적인 틀을 가지고 있다.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
    </head>
    <body>
      <header>
        <nav>
        </nav>
      </header>
      <section class="hero-section">
      </section>
      <section class="form-section">
      </section>
    </body>
  </html>
  ```

- `<a>`태그는 링크 태그로 default상태로 누르면 해당 페이지가 새로고침되면서 이동하게 된다. 하지만 `target="_blank"` attribute를 사용하게 되면 새로운 탭에서 페이지가 생성된다.
  또한 `href="#something"`를 사용하게 되면 해당 element로 이동하게 된다.

  ```css
  html {
      scroll-behavior: smooth;
  }
  ```

  위와 같이 사용하게 된다면, 부드러운 스크롤로 이동하게 된다.

- `<input>`태그에 `maxlength`와 `minlength`를 정해줄 수 있다.

- `<input>`태그에 `required` attribute를 사용하게 되면 입력을 강제할 수 있다.

- `<select>`, `<option>` 는 combo박스 태그이다. `<select>`태그 하위에 `<option>`태그가 자식으로 온다.

- CSS 파일을 분리한다.

- 기본적으로 설정할 부분이 있다.(편의성)
  html font-size를 정확하게 10px에 맞춘다.
  margin, padding이 있는 상태에서 width=100%를 하면 좌우 스크롤이 생성되는 문제가 있다. 이를 해결하기 위함이다.

  ```css
  * {
  	margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html {
  	font-size: 62.5%;
  }
  ```

- font-size의 단위는 rem을 사용한다.
  em은 부모 element에 영향을 받으므로, 사용이 불편하며
  rem은 부모 element에 영향을 받지않고 상대적 크기를 구할 수 있으므로 편리하다.

- `+` 을 통해서 연속된 element에 접근이 가능하다.

  ```css
  .my-list + ul {
      list-style: none;
      color: cyan;
  }
  
  .my-list + ul li:nth-child(1) {
      color: blue;
  }
  ```

- `position: fixed` 또는 `position: sticky`는 nav에 활용이 가능하다.

- `transform: translate(-50%, -50%);`를 통해 중앙 정렬을 할 수 있다. 단 `position: absolute;`상태이여야 한다.(부모가 `position: relative`이여야 한다.)

- Dark mode를 하고 싶다면,

  ```css
  html {
  	background: rgb(0, 0, 0);
      filter: invert(1) hue-rotate(180deg);
  }
  ```

- `display: flex;`를 통해 자식 요소들을 쉽게 정렬할 수 있다.

  ```css
  div {
  	display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  ```

- `<button>`에 pointer를 바꾸려면 `cursor: pointer;`를 하면 된다.

- 애니메이션 효과를 주고 싶다면, `@keyframes`를 활용한다.
  `<button>`를 비활성화 시키려면, 아래와 같이 한다.

  ```css
  @keyframes fade {
      from {
  		pointer-events: all;
      }
      to {
          pointer-events: none;
      }
  }
  ```

- `<p>`태그 selection [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)를 통해 드래그 색을 지정할 수 있다. 또한 first-letter를 이용하여 문단 첫 글자에 효과를 줄 수 있다.

  ```css
  p::selection {
    background: skyblue;
    color: white;
  }
  
  p::first-letter {
    font-size: 4rem;
    font-weight: bold;
    font-family: sans-serif;
  }
  ```

- `<a>`태그에 `text-decoration: none;`을 사용하면 일반 텍스트와 동일하게 표시한다.

- 텍스트 효과 주기

  ```css
  h1 {
    font-size: 5rem;
    background: linear-gradient(to left, rgb(160, 77, 77), rgb(255, 0, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
  }
  ```

- 화면의 크기가 변경할 때, 폰트를 크기를 변경할 수 있다. 이는 rem의 단위를 사용하게 되면 좋은 이유이다.

  ```css
  @media screen and (max-width: 700px) {
    html {
      font-size: 50%;
    }
  }
  ```

- `:hover`를 통해 간단한 효과를 줄 수 있다.(마우스 호버링)
  `:focus`, `::after`, `::before`

- `<ul>`, `<ol>`태그의 `list-style: none;`을 주면 리스트의 모양들이 다 사라진다.(번호 혹은 점이 사라진다.)

- `float: right`를 통해 오른쪽 혹은 왼쪽으로 이동시킬 수 있다.

- `float`를 사용하게 되면, 겹치거나 이상하게 출력되는 문제가 발생한다. 이때, `clear: both;`를 가진 `<div>`를 그 부분에 넣어서 문제를 해결 할 수 있다.

  ```html
  <nav>
      <h1 id="logo">Logo</h1>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <div class="clear"></div>
  </nav>
  ```

  

  ```css
  nav h1 {
    float: left;
  }
  
  nav ul {
    float: right;
    list-style: none;
  }
  
  nav li {
    float: left;
    margin: 0rem 2rem;
  }
  
  .clear {
    clear: both;
  }
  ```

- `background`를 이미지로 하고 싶다면 `background-image: url();`을 사용하면 된다.
  `background-position: center;`를 하면 배경사진의 중앙에 위치하게 된다.

  ```css
  .hero-section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/HTML_CSS/img/city_art_sky_127834_1920x1080.jpg");
    height: 100vh;
    background-position: center;
    background-size: cover;
    text-align: center;
    color: white;
    text-shadow: 3px 3px 10px black;
  }
  ```

  

