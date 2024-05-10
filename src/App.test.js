import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn docker and cicd/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a basic react app intended for showing how docker and ci-cd works/i);
  expect(linkElement).toBeInTheDocument();
});

