import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Unique colours', () => {
  render(<App />);
  const linkElement = screen.getByText(/Unique colours/i);
  expect(linkElement).toBeInTheDocument();
});