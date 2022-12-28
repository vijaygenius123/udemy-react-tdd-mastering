import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

it('should have initial color as red', function () {
    render(<App />)
    const btn = screen.getByRole('button', {name : /change to blue/i})
    expect(btn).toHaveClass('red')
});


it('should change color to blue once clicked', function () {
    render(<App />)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    fireEvent.click(btn)
    expect(btn).toHaveClass('blue')
});

it('should have the initial state as red and enabled with unchecked checkbox', function () {
    render(<App />)
    const btn = screen.getByRole('button', {name : /change to blue/i})
    const checkbox = screen.getByRole('checkbox')
    expect(btn).toBeEnabled()
    expect(checkbox).not.toBeChecked()
});
