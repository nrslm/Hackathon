import { configureStore } from '@reduxjs/toolkit'
import counterReduce from "../features/CounterSlice"
import test from '../features/test'

export const store = configureStore({
  reducer: {
    counter: counterReduce,
    test: test,
  },
})