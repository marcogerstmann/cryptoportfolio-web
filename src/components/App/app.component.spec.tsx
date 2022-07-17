import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('should render example text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is going to be a powerful crypto portfolio app/i);
  expect(linkElement).toBeInTheDocument();
});
