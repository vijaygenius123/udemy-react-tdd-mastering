import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

it('should have initial color as red', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    expect(btn).toHaveClass('red')
});


it('should change color to blue once clicked', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    fireEvent.click(btn)
    expect(btn).toHaveClass('blue')
});

it('should have the initial state as red and enabled with unchecked checkbox', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})
    expect(btn).toBeEnabled()
    expect(checkbox).not.toBeChecked()
});

it('should disable the button when the checkbox is checked', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})
    expect(btn).toBeEnabled()
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(btn).toBeDisabled()
});

it('should make the button grey when checkbox is checked', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})
    expect(btn).toHaveClass('red')
    fireEvent.click(checkbox)
    expect(btn).toHaveClass('disabled')
});

it('should retain the button state when checkbox is checked and unchecked', function () {
    render(<App/>)
    const btn = screen.getByRole('button', {name: /change to blue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})
    expect(btn).toHaveClass('red')
    fireEvent.click(btn)
    expect(btn).toHaveClass('blue')
    fireEvent.click(checkbox)
    expect(btn).toHaveClass('disabled')
    fireEvent.click(checkbox)
    expect(btn).toHaveClass('blue')
});
