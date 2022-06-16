import { render, screen } from '@testing-library/react';
import App from './App';

test('renders This is my first app text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my first app/i);
  expect(linkElement).toBeInTheDocument();
});
