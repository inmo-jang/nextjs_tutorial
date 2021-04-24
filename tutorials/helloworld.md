# Next.js 처음 시작하기 (Hello World)

[Next.js](https://nextjs.org/)을 처음 시작하기 위해서는 공식웹페이지 [Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)을 따라해보는 것이 제일 좋다. 


### Create a Next.js app
다음과 같은 방식으로 아주 간단한 Next.js app 생성이 가능하다.
 
```
npx create-next-app {app_name} --use-npm 
```

- `npx` 사용을 위해서, [**Node.js** 설치](https://nodejs.org/en/download/)가 필요하다.
- `--example "{github repo}"` 옵션을 사용함으로써 기존 repo 이용이 가능하다. 본 tutorial을 이용해보려면 `npx create-next-app nextjs-tutorial --use-npm --example "https://github.com/inmo-jang/nextjs_tutorial"`로 하면 된다. (그리고 본 tutorial은 `nextjs_tutorial`을 이용한다고 가정하고 설명을 진행한다.) 

### Run the development server
`nextjs-tutorial` app을 실행하기 위해서 다음을 실행한다.

```
cd nextjs_tutorial
npm run dev
```

이제 `localhost:3000`을 접속하면 된다. 