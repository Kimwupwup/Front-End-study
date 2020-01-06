# 노마드 코더 - React Basic

[노마드 코더 - React Fundamentals 2019](https://www.youtube.com/watch?v=gJdHKIj0Bx4&list=PL7jH19IHhOLPp990qs8MbSsUlzKcTKuCf&index=2)

## Why...?

- 많은 회사들이 사용하고 있기 때문이다.
- Airbnb, npm, netflix, spotify, slack...
- 많은 돈 ,시간, 자원이 투자되고 있다.
- 많은 사람들이 사용하고 있기 때문에, 튜토리얼, 리뷰, 문제점을 쉽게 해결할 수 있다.
- 점점 더 성장하고 있다.

## React

- Virtual DOM(Virtual Document Object Model)
- 소스코드에는 보이지 않는다.
- React는 소스코드에 처음부터 HTML에 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 방법을 알고 있다.
- 빈 HTML파일을 불러오고, react가 HTML을 밀어넣는다. ("root"에 밀어넣는다.)
- 이러한 특징들이 빠르게 작용한다.

## Component

- component 는 HTML을 반환하는 함수
- `<App />` 컴포넌트 사용 (JSX = Javascript + HTML)
- Props 는 Component 의 argument 로 들어간다.
```react
import React from "react";

function Food(props) {
  return <h1>I like Food {props.fav}</h1>;
}

function App() {
  return (
        <div>
​      <h1>Hello</h1>
​      <Food fav="kimchi" />
​    </div>
  );
}
export default App;
```

## 필기

- `map` 활용
- `map` 은 return 데이터는 array이다.
```react
function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} picture={dish.image}/>;
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            {foodILike.map(renderFood)}
        </div>
    );
}
```
- Prop 을 인자로 받을 때, 정확한 인자를 받았는지 확인하는 단계가 필요하다.


