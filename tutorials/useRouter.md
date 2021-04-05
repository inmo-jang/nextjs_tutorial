# useRouter 이용하기

- `Link` in `next/link`를 이용하면, SSR이 되는데 이것을 사용하기 어려운 경우 `useRouter`를 이용해서 페이지 이동이 가능하다.
- `useRouter`를 이용하여 페이지를 이동하면서 `query`를 통해 변수 이동도 가능하다.
```
const Function () => {
    ...
    const router = useRouter()
    ...
    router.push({
        pathname: "YourURL",
        query: {
        wp: "AnyValue",
        line: "AnyValue2"
        } 
    })
}
```

- 하지만 `useRouter`는 React Class Component에서는 사용이 안된다. 따라서 이때는 Class Component를 Function Component로 Wrapping을 해야한다 ([참조](https://stackoverflow.com/questions/57027469/how-to-use-userouter-from-next-js-in-a-class-component))

- 한 페이지 내에서 Option을 선택할때 해당 옵션에 맞는 parameter를 query로 넘기면서 다시 페이지를 re-rendering을 하려고 할때는 동일한 `js`파일을 이름만 바꿔서 생성한후에, 복사본쪽으로 `router.push`를 하는 방식으로 했을때 구현이 된다. ([/examples/useRouterInClass.js 참조](/examples/useRouterInClass.js))