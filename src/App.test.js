import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

it('should have initial color as red', function () {
    render(<App />)
    const btn = screen.getByRole('button', {name : /change to blue/i})
    expect(btn).toHaveStyle({backgroundColor: 'red'})
});


it('should change color to blue once clicked', function () {
    render(<App />)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    fireEvent.click(btn)
    expect(btn).toHaveStyle({backgroundColor: 'blue'})
});
