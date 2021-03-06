# nextjs_tutorial

## 01. Create a new template
- Create: `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/data-fetching-starter"`
- Run the webserver: `npm run dev`
- NOTE: `pages/index.js`가 메인페이지로 동작한다.


## 02. Navigating pages [[link]](https://nextjs.org/learn/basics/navigate-between-pages/link-component)
- `'next/link'`를 이용하여 internal sites끼리 연결 가능
  ``` 
  import Link from 'next/link'
  ...
  <h1 className="title">
    <Link href="/posts/first-post">
        <a>First Post Link</a>
    </Link>
  </h1>
  ```

- 단, 외부페이지 link를 할 경우 `<a href="https://nextjs.org">Next.js!</a>` 이런식으로 `<a>`를 써야함. 
      
## 03. `/public` 폴더는 static assets; Image 삽입하기 [[link]](https://nextjs.org/learn/basics/assets-metadata-css/assets)
- `/public/images` 안에 사진을 넣으면 global info로서 여기저기 웹페이지에서 access가 가능함.
- Image 삽입하기 
  ``` 
  import Image from 'name/image'
  ....
   <Image
      src="/images/drone.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
   />
  ```

## 04. `<Head>`로 metadata [[link]](https://nextjs.org/learn/basics/assets-metadata-css/metadata) 
  ```
  import Head from 'next/head'
  ...
  <Head>
     <title>FP</title>
  </Head>
  ```
## 05. `/components` 폴더 안에 `Layout`만들어서 이용 [[link]](https://nextjs.org/learn/basics/assets-metadata-css/layout-component)
- `/components/layout.js`를 만들어서 아래와 같이 import 해서 씀으로써 모든 webpage에 일괄 스타일링 적용이 가능하다.
- For a `js` file (e.g. `/posts/first-post.js`)
  ```
  import Layout from '../../components/layout'
  ....
  <Layout>
    Your contents
  </Layout>
  ```
- `layout.js`는 css module을 넣음으로써 스타일링 할수 있다.
  - `components/layout.module.css`를 만들어서 아래 내용을 넣고 (**NOTE**: 파일이름은 항상 `xxx.module.css` 이어야 한다),
  ```
  .container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
  }
  ```
  - `components/layout.js`를 다음과 같이 수정하면 된다.
  ```
  import styles from './layout.module.css'
  export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
  }
  ```
## 06. Global Style용 CSS를 이용하기 [[link]](https://nextjs.org/learn/basics/assets-metadata-css/global-styles)
- `/styles/global.css`에서 스타일을 정의하고, 
- `/pages/_app.js`를 만들어서 여기에서 css를 import해서 써야 한다.
  ```
  import '../styles/global.css'
  ```

## 07. 
