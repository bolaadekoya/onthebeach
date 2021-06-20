import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main application', () => {
  render(<App />);
  const ele = screen.getByText(/alphabetically/i);
  expect(ele).toBeInTheDocument();
});
