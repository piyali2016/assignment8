import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './ProductList';

describe('ProductList', () => {
  it('should render the ProductList component', async () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('should render the course list', async () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByText('Course 1')).toBeInTheDocument();
      expect(screen.getByText('Course 2')).toBeInTheDocument();
      expect(screen.getByText('Course 3')).toBeInTheDocument();
    });
  });
});
