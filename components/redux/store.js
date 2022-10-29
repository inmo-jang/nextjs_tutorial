import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})