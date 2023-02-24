import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductList from './ProductList';
import { fetchCourseList } from './redux/courseSlice';

describe('ProductList component', () => {
  test('renders a list of courses', async () => {
    const courses = [
      { id: 1, title: 'Course 1', Description: 'Description 1', img: 'image1.jpg' },
      { id: 2, title: 'Course 2', Description: 'Description 2', img: 'image2.jpg' },
      { id: 3, title: 'Course 3', Description: 'Description 3', img: 'image3.jpg' },
    ];

    const store = configureStore({
      reducer: {
        course: (state = { courses }, action) => {
          switch (action.type) {
            case fetchCourseList.type:
              return { courses: action.payload };
            default:
              return state;
          }
        },
      },
    });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    // Wait for the courses to load
    await screen.findByText('Course 1');

    // Check that all the courses are rendered
    expect(screen.getByText('Course 1')).toBeInTheDocument();
    expect(screen.getByText('Course 2')).toBeInTheDocument();
    expect(screen.getByText('Course 3')).toBeInTheDocument();
  });
});
