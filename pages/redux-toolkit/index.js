import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

import Layout from '../../components/layout'
import Counter from './counter'


function App() {
    return (
      <Provider store={store}>      
        <Layout>            
          <Counter></Counter>
        </Layout>  
      </Provider>      
    )
}
export default App;