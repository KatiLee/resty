import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import History from './index';

describe('History component', () => {
  it('renders without crashing', () => {
    render(<History history={[]} displayHistory={() => {}} />);
  });

  it('displays history records', () => {
    const history = [
      { method: 'GET', url: '/api/users' },
      { method: 'POST', url: '/api/posts' },
    ];
    const displayHistory = jest.fn();
    const { getByText } = render(<History history={history} displayHistory={displayHistory} />);
    
    history.forEach((record) => {
      const recordText = `${record.method} : ${record.url}`;
      expect(getByText(recordText)).toBeInTheDocument();
    });
  });

  it('calls displayHistory with the correct index', () => {
    const history = [
      { method: 'GET', url: '/api/users' },
      { method: 'POST', url: '/api/posts' },
    ];
    const displayHistory = jest.fn();
    const { getAllByRole } = render(<History history={history} displayHistory={displayHistory} />);
    
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(displayHistory).toHaveBeenCalledWith(0);
    
    fireEvent.click(buttons[1]);
    expect(displayHistory).toHaveBeenCalledWith(1);
  });
});
