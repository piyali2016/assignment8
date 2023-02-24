import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../redux/courseSlice';

describe('store', () => {
  it('should configure store correctly', () => {
    const store = configureStore({
      reducer: {
        course: courseReducer,
      },
    });
    expect(store.getState()).toEqual({
      course: {
        value: 0,
        courses: [],
        enquries: [],
      },
    });
  });
});
