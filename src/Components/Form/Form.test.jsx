import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import React from 'react';
import Form from './index';

describe('Form component', () => {
  it('renders without crashing', () => {
    render(<Form handleApiCall={() => {}} />);
  });

  it('updates URL value on input change', () => {
    const handleApiCall = jest.fn();
    const { getByTestId } = render(<Form handleApiCall={handleApiCall} />);
    const urlInput = getByTestId('test-url-input');
    const urlValue = 'https://example.com';

    fireEvent.change(urlInput, { target: { value: urlValue } });

    expect(urlInput.value).toBe(urlValue);
  });

  it('calls handleApiCall on form submission', () => {
    const handleApiCall = jest.fn();
    const { getByTestId } = render(<Form handleApiCall={handleApiCall} />);
    const form = getByTestId('test-form');

    fireEvent.submit(form);

    expect(handleApiCall).toHaveBeenCalledTimes(1);
  });

  it('updates method on span click', () => {
    const handleApiCall = jest.fn();
    const { getByTestId } = render(<Form handleApiCall={handleApiCall} />);
    const getSpan = getByTestId('test-get');
    const postSpan = getByTestId('test-post');

    fireEvent.click(postSpan);

    expect(getSpan).toHaveStyle('background-color: silver');
    expect(postSpan).toHaveStyle('background-color: lime');
  });

//   it('updates data on textarea change when method is post', () => {
//     const handleApiCall = jest.fn();
//     const { getByTestId } = render(<Form handleApiCall={handleApiCall} />);
//     const textarea = getByTestId('test-post-textarea');
//     const dataValue = 'Test data';
  
//     fireEvent.click(getByTestId('test-post')); // Simulate selecting the 'post' method
//     fireEvent.change(textarea, { target: { value: dataValue } });
  
//     expect(textarea.value).toBe(dataValue);
//   });
  
});
