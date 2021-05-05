# useEffect 개념정리

## Introduction
React Component를 작성시 **Class**를 이용하는 방식과 **Hook**를 이용하는 방식이 있다 [[참조](tutorials/Hook_vs_Class.md)]. 프로젝트가 복잡해지면, (1) React Component가 생성되는 시점(initialisation); (2) 중간중간에 User Interaction으로 인해 발생하는 re-rendering; (3) 그리고 마지막에 Component가 종료되면서 수행해야할 프로세스등 관리해야할 수 있는데, 이때 사용하는 방법을 **Lifecycle methods**라고 부른다 (참고 - [Class방식](https://reactjs.org/docs/react-component.html); [Hook방식](https://reactjs.org/docs/hooks-effect.html)). Class방식을 이용할 경우 `componentDidMount`, `componentWillMount`등의 형태로 내가 어느시점의 프로세스를 담당하는지 명확하게 할수 있는 반면, 코드가 지저분해지는 경향이 있다고 한다. Hook방식은 상대적으로 최근에 도입된 방식으로, 대표적으로 `useEffect`를 통해서 관리를 할 수 있으며, 전체적인 코드가 간단해지는 경향이 있다. 본 튜토리얼에서는 `useEffect`의 사용 방법을 간단히 알아본다.

## 기본사용방법

```
function ReactComponent(){
  ...
  useEffect(() => {
    // 수행하고 싶은 프로세스 내용
  })
  ...
  return(
    <>
      // 렌더링내용(JSX)
    </>
  )
}
```

기본적인 Component 코드의 골격은 위와 같이 될것이다. **기본적으로 `useEffect`는 rendering(`return`)이 수행되고 나서 수행된다**. `return` 파트 외에 별도로 수행하고 싶은 프로세스를 **side effect**라고도 표현하는데, `useEffect`는 이러한 side effect를 구현하기 위해 사용된다고 보면 된다(예를 들면 `console.log`, `alert`같은 것들). 

## Dependency Array 이용하기

### (1) 특정 state가 바뀔 때 동작하게 하기

위의 예시대로 사용하면, re-rendering이 필요하게 될때마다(예를 들면, 사용자가 interaction을 수행할때마다) `useEffect`내 프로세스가 동작하게되어 불필요한 re-rendering이 발생하게 된다. 그리고 이는 웹페이지 성능저하로 귀결된다. 따라서, 내가 원할때 `useEffect`가 동작하게 하고싶은 경우가 많은데, 이때 **dependency array**를 활용하면 된다.

```
  useEffect(() => {
    console.log(`Test ${val}`);
    // 수행하고 싶은 프로세스 내용
  }, [val])
```  

위 코드 예시를 보면, `[val]`이라는 구조가 추가되었는데 이를 dependency array라고 한다. 위의 `useEffect`는 `val`이 변할때만 동작하게 된다. 

**Array라는 표현에 맞게 여러 변수를 동시에 고려** 할수도 있는데, array안에 여러 변수를 넣게되면 (예를 들면, `[val1, val2]`) 이때는 **OR** 형태로 동작한다고 생각하면 된다 (array내 변수중 어느것 하나라도 바뀐다면 동작한다).  

### (2) React Component가 처음 시작할때만 동작하게 하기

보통 DB나 json파일을 통해 data를 fetch하고 싶을때 `componentDidMount`같은 방법을 class방식에서는 사용했었는데, Hook방식에서는 `useEffect`를 활용하면 된다. 즉, `useEffect`를  **Initialisation으로 활용**하고 싶은 것인데 이때는 dependency array를 empty array로 넣으면 된다 (i.e. `[]`).  
```
  useEffect(() => {
    // 수행하고 싶은 프로세스 내용
  }, [])
```

### (3) React Component가 종료될때 동작하게 하기

Component가 종료될 때만 동작하게하고 싶다면, empty array를 넣고 `return() => { // 수행하고 싶은 프로세스 내용}`를 넣으면 된다. 이때 굳이 (2)의 내용과 분리할필요 없이 아래와 같이 합쳐서 하나의 `useEffect`로 나타낼수도 있다.

```
  useEffect(() => {
    // 수행하고 싶은 Initialisation 프로세스 내용
    return () => {// 수행하고싶은 종료프로세스 내용}
  }, [])
```

## 활용 Tips
- 여러 기능별 요소(functionality)를 하나의 `useEffect`로 나타내는 것 보다는, 기능별로 쪼개서 별도의 `useEffect`로 코드작성하는 것이 좋은 방법이라고 한다.
