import courseReducer, { fetchCourseList } from '../redux/courseSlice';

describe('courseSlice', () => {
  it('should handle fetchCourseList', () => {
    const courses = [{ id: 1, title: 'Course 1' }, { id: 2, title: 'Course 2' }];
    const initialState = { courses: [] };
    const action = { type: fetchCourseList.type, payload: courses };
    const state = courseReducer(initialState, action);
    expect(state.courses).toEqual(courses);
  });
});
