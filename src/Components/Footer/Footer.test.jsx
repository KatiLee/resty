import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    it('should contain the footer id', () => {
        render(<Footer />);
        const footer = screen.getByTestId('test-footer');
        expect(footer).toBeInTheDocument();
    })
})