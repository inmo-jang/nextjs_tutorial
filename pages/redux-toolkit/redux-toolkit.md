# Redux Toolkit

## Introduction
State management를 위해서 Redux를 사용해본다. Redux를 사용하는 방식도 "기본적인 방식"이 있고 ([https://redux.js.org/ 참조](https://redux.js.org/)), 좀더 쉽게 사용해볼수 있는 "Redux Toolkit"을 이용하는 방식 ([https://redux-toolkit.js.org/ 참조](https://redux-toolkit.js.org/))이 있다. 전자는 좀 이것저것 복잡한듯한 느낌이고, 후자가 좀더 간단하다. 실제로 [redux-toolkit이 나온 배경](https://redux-toolkit.js.org/introduction/getting-started) 자체도 기본 Redux가 복잡하기 때문이기도 하다. 본 튜토리얼에서도 Redux Toolkit의 사용방법을 설명해보고자 한다. 

본 튜토리얼은 [React Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start)를 기반으로 한 것이다. 다만, 이것은 React를 기반으로 되있으니, 여기서는 NextJS기반으로 사용할수 있게 설명해보겠다. 

## Install
우선, Redux Toolkit 사용을 위해서 먼저 다음을 설치하자. 
```
npm install @reduxjs/toolkit react-redux
```

## How to use
Redux Toolkit 사용을 위해서 크게 (1) Storage와 (2) Redux Slice를 각각의 `js`로 정의해줘야 한다. 그리고 이것을 이용할 (3) React Component가 필요하다.

(부연설명) Storage는 states를 담고 있는 개념이라고 이해하면 되는데, Redux Slice는 사실 확 와닿지는 않는다. 구글링을 해보면 "A Redux Slice is a collection of reducer logic"라고 한다. 아래 예시를 보면 알겠지만, Slice파일에 state의 초기값 및 states를 어떻게 변환할 것인지를 정의한다 (그리고 이렇게 변환해주는 function을 **reducer**라고 한다). 사실 여기서 **reducer**라는 단어가 확 와닿진 않는다. [React 사이트](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers)에 따르면, "Reducers are functions that take the current `state` and an `action` as arguments, and return a new `state` result. In other words, `(state, action) => newState`" 라고 한다. "reduce"라는 단어를 영영사전으로 찾아보면 그중에 "change a substance to (a different or more basic form)"라는 말도 있는데, 아마 이런뜻과 서로 관련이 있지 않을까 싶다. 

### (1) Store 
자 그럼, Storage 역할을 하는 [`store.js`](./store.js)를 다음과 같이 정의해보자.
```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer, 
  },
})
```

실제로 각자 프로젝트에 사용할때 위와 같은 구조를 유지한 채, 변수명 정도만 나름 바꿔서 사용하면 된다. 코드를 설명하면 다음과 같다.
- `configureStore`는 storage를 생성해주는 function이다. `reducer: {...}` 까지는 그대로 사용하면 되고, 이 내부 내용만 알아서 바꿔주면 된다. 
- `counter`는 본 storage의 이름을 정의한 것이다. 나중에 React Component에서 사용할 이름이다.
- `counterReducer`는 `counterSlice.js`에서 가져온 것으로, states 및 reducer에 대한 정의가 담겨있다 (곧 설명할 것이다).

### (2) Redux Slice
이제 Redux Slice를 [`counterSlice.js`](./counterSlice.js)로 정의하자. (원 출처 튜토리얼에서 이 파일 이름을 왜 `counterSlice`라고 했을까 궁금하다. 아마도 추측컨데 본 store이름 자체가 `counter`라서 이를 위한 Redux Slice라는 의미로 `counterSlice`가 아닐까 싶다.)
```
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  // Store 이름
  name: 'counter', 
  // State 초기값
  initialState: {
    value: 0,
  },
  // Reducers 정의
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Reducers들을 React Component에서 사용할 것이니까 export하기
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

코드 내용은 어렵지 않다. `createSlice`를 이용해서 `counterSlice`를 정의한다.
- `name`: Store의 이름 설정.
- `initialState`: states의 종류와(여기서는 state가 한개 -- `value` -- 이다.) 초기값을 설정한다.
- `reducers`: 앞서 정의한 states를 어떤 식으로 변경할 것인지 functions을 설정한다. 그리고 본 functions은 나중에 다른 React Component에서 사용할 것이기에 export해준다.

### (3) React Component
자 이제 앞서 정의한 것들을 이용해서 states를 변경하는 React Component(called [`counter.js`](./counter.js))를 만들어보자. 

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```

- Storage내에 `value`라는 state를 사용하기 위해서 `useSelector`를 이용한다. (참고: 위 예시는 일단 하나의 state를 사용하기 위해서 `state.counter.value`를 `count`로 가져왔지만, `state.counter`를 가져와서 하위 여러 states를 접근할 수 있다.)
- `counterSlice`에서 두개의 functions(i.e. `decrement`, `increment`) 만 사용한다. 그리고 이것을 실제로 구동하기 위해서는 `const distpatch = useDispatch()`가 필요하다. 버튼을 눌렀을 때(i.e. `onClick`), `dispatch({function_name})`형태로 해야한다.  

### (4) 메인 웹페이지
자 이제 위에서 설정한 것을 메인 웹페이지([`./index.js`](./index.js))에서 사용해보자.
```
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './counter'

function App() {
    return (
      <Provider store={store}>      
          <Counter></Counter>
      </Provider>      
    )
}
export default App;
```

- 앞서 정의한 `store`와 `Counter` component를 import 한다.
- App내에서는 `<Provider store={store}> .... </Provider>` 구문을 통해, 이 내부에서는 store를 사용할수 있게 된다. 그래서 이 안에 `Counter`를 넣어야 앞서 정의한 카운팅기능이 잘 동작한다.



## 참고
- [https://redux-toolkit.js.org/tutorials/quick-start](https://redux-toolkit.js.org/tutorials/quick-start)


