import { render, screen } from '@testing-library/react';
import App from './App';

describe('Rending Components', () => {
  it('renders App component', () => {
    render(<App />);
  });
});
