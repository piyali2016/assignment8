import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList component', () => {
  test('renders a list of products', async () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Product 1',
        description: 'This is the first product',
        price: 10,
        thumbnail: 'https://dummyimage.com/300x200/000/fff',
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'This is the second product',
        price: 20,
        thumbnail: 'https://dummyimage.com/300x200/000/fff',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ products: mockProducts }),
    });

    const { findByText } = render(<ProductList />);

    const product1Title = await findByText('Product 1');
    const product1Price = await findByText('price: 10');
    const product1Description = await findByText('This is the first product');

    const product2Title = await findByText('Product 2');
    const product2Price = await findByText('price: 20');
    const product2Description = await findByText('This is the second product');

    expect(product1Title).toBeInTheDocument();
    expect(product1Price).toBeInTheDocument();
    expect(product1Description).toBeInTheDocument();

    expect(product2Title).toBeInTheDocument();
    expect(product2Price).toBeInTheDocument();
    expect(product2Description).toBeInTheDocument();
  });
});
