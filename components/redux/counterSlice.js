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