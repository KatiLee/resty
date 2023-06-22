import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from '.';

describe('Form', () => {
    it('can utilize the appropriate method', () => {
        render(<Form />);
        const get = screen.getByTestId('test-get');
        const post = screen.getByTestId('test-post');
        const put = screen.getByTestId('test-put');
        const minus = screen.getByTestId('test-minus');
    });
});