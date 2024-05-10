import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn docker and cicd/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is a basic react app example/i);
  expect(linkElement).toBeInTheDocument();
});

