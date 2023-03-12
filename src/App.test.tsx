import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Customers component', () => {
  render(<App />);
  const customersComponent = screen.getByTestId('customers-component');
  expect(customersComponent).toBeInTheDocument();
});
