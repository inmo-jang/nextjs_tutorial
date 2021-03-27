import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Layout from '../../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styling

import React from 'react'


// function Headline({value}) {
//   return <h1>{value}</h1>;
// }

function Headline_1 ({greeting}) {
  return <h1>{greeting}</h1>;
}

const Headline_2 = ({greeting}) => {
    return <h1>{greeting}</h1>;
}

function App_by_Hook() {
  return (
    <Layout>    
      <Headline_1 greeting="React Function Component로 Subfunction 정의 방법"></Headline_1> 
         <div className={styles.code}>            
            {`function Headline_1 ({greeting}) {
                return <h1>{greeting}</h1>;
            }`}            
         </div> 

      <Headline_2 greeting="React Arrow Function Component 로 Subfunction 정의 방법"></Headline_2>    
         <div className={styles.code}>            
            {`const Headline_2 = ({greeting}) => {
                  return <h1>{greeting}</h1>;
            }`}            
         </div>     
    </Layout>

  )
}
export default App_by_Hook;