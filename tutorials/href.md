# NextJS에서 `href = "..."`로 에러날 때 `useRouter`이용하여 해결하기

## Issue
React Componets를 사용하다보면 `href = "..."` 방식으로 페이지 이동을 하게 되는 경우가 많다. 하지만 NextJS에서는 이렇게 하면, 페이지가 rendering되지 않는 경우가 발생한다. 예를 들면, `react-bootstrap`의 [`Nav`](https://react-bootstrap.github.io/components/navs/)를 이용하고 싶은데, 여기 예제를 보면 `href`를 이용하는데 (아래 예시 참조), 이 방식을 그대로 썼다간 렌더링 오류가 난다.

```
<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
</Nav>
```

## Solution
`useRouter`와 `onClick`의 조합으로 해결하면 된다. [`Nav.Link` API](https://react-bootstrap.github.io/components/navs/#nav-link-props)를 보면, onClick이 있는데, 다음과 같이 하면 된다.

```
...
const router = useRouter()
...
    <Nav.Link onClick = {() => router.push("/home")}>Active</Nav.Link>
...
```

