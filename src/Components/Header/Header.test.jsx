import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
    it('should contain the header id', () => {
        render(<Header />);
        const header = screen.getByTestId('test-header');
        expect(header).toBeInTheDocument();
    })
});