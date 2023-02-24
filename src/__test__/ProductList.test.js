import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import courseReducer, { fetchCourseList } from './redux/courseSlice';

const mockCourses = [
  {
    id: 1,
    title: 'React Development',
    img: 'https://example.com/react-dev.jpg',
    Description: 'Learn to build web applications with React'
  },
  {
    id: 2,
    title: 'Node.js Development',
    img: 'https://example.com/nodejs-dev.jpg',
    Description: 'Learn to build server-side applications with Node.js'
  }
];

describe('ProductList', () => {
  it('renders a list of courses', async () => {
    const store = configureStore({
      reducer: {
        course: courseReducer
      },
      preloadedState: {
        course: {
          courses: mockCourses
        }
      }
    });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    // Wait for courses to be fetched and rendered
    await waitFor(() => {
      const courseCards = screen.getAllByRole('article');
      expect(courseCards.length).toBe(2);

      const courseTitles = screen.getAllByRole('heading', { level: 5 });
      expect(courseTitles[0]).toHaveTextContent('React Development');
      expect(courseTitles[1]).toHaveTextContent('Node.js Development');

      const courseDescriptions = screen.getAllByRole('paragraph');
      expect(courseDescriptions[0]).toHaveTextContent('Learn to build web applications with React');
      expect(courseDescriptions[1]).toHaveTextContent('Learn to build server-side applications with Node.js');

      const enquireButtons = screen.getAllByText('Enquire');
      expect(enquireButtons.length).toBe(2);
    });
  });
});
