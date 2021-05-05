# React Class vs Hook

React를 이용해서 Web을 만들때 *Class*를 이용하는 방식과 *Hook*를 이용하는 방식이 있다. 동일한 기능이더라도 어떠한 방식으로 구현하느냐에 따라서 다른 coding structure를 가지게 된다. 

[`/pages/examples/hook_vs_class.js`](/pages/examples/hook_vs_class.js)를 참조. 


## (1) 기본 형식

### React Class 예시
```
class App extends React.Component {
    render() {
        return(
            <div>
                Hello World!
            </div>
        )
    }
}
```

### React Hook 예시
```
function App () {
    return(
        <div>
            Hello World!
        </div>
    )
}
```



## (2) Stateless Function Component (with props) 정의하기

### React Class 예시

(Coming soon)

### React Hook 예시

메인함수(`App`)외 별도로 Subfunction을 구현하려고 할때, *React Function Component*로서 정의할 수 있다.

```
import React from 'react';
 
function App() {
    return <Headline greeting = "Hello World!"/>;
}
 
function Headline({greeting}) {
    return <h1>{greeting}</h1>;
}
 
export default App;
```

아니면, 다음과 같이 *React Arrow Function Component*로 정의할수도 있다.
```
import React from 'react';


function App() {
    return <Headline />;
}
const Headline = ({greeting}) => {
    return <h1>{greeting}</h1>;
}


export default App;
```

**유의사항**
- 웹페이지를 구동하는 main 함수(i.e., `App`)외 별도의 subfunction을 구현하려고 할 때 함수명의 시작이 대문자여야 된다(i.e., `Headline`). 소문자로 시작하는 함수명은 동작하지 않는다.
- React Function Component는 `.js`파일 아무데나 정의되어도 상관없다. React Arrow Function Component는 실제로 호출되는 위치보다 뒤에 선언되면 에러가 난다.
- Function component의 input을 `props`로 받고, 내부적으로는 `props.greeting`으로 처리해도 된다.  

## (3) React Function Component with States 정의하기

### React Class 예시
(Coming soon)
### React Hook 예시
(Coming soon)

## (4) Event Handler 처리하기

### React Class 예시
(Coming soon)
### React Hook 예시
(Coming soon)

## (5) Callback function 처리하기

### React Class 예시
(Coming soon)
### React Hook 예시
(Coming soon)

## (6) Lifecycle 
(Coming soon)

## Good references to read
- React Hook Examples: https://www.robinwieruch.de/react-function-component
- 
