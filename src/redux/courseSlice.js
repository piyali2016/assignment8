import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  courses:[],
  enquries:[]
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    fetchCourseList: (state, action) => {
      state.courses = action.payload
     },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fetchCourseList } = courseSlice.actions

export default courseSlice.reducer