import { configureStore } from '@reduxjs/toolkit'
import couseReducer from './courseSlice'
export const store = configureStore({
  reducer: {
    course: couseReducer,
  },
})