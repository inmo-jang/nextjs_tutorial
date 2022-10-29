import React from 'react'
import store from '../../components/redux/store'
import { Provider } from 'react-redux'

import Layout from '../../components/layout'
import Counter from '../../components/redux/counter'


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