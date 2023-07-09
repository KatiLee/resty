import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('displays request method and URL', () => {
    render(<App />);
    
    const methodElement = screen.getByTestId('test-method');
    const urlElement = screen.getByTestId('test-url');
    
    expect(methodElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();
  });
});
