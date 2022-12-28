import {useState, useId} from "react";
import './App.css';

function App() {
    const [color, setColor] = useState('red');
    const [disabled, setDisabled] = useState(false);
    const checkboxId = useId()
    const newBtnColor = color === 'red' ? 'blue' : 'red'
    const handleColorChange = () => {
        setColor(prev => prev === 'red' ? 'blue' : 'red')
    }
    const handleCheckbox = () => {
        setDisabled(prev => prev!==true)
    }
    return (
        <div>
            <button
                className={disabled ? 'disabled': color}
                onClick={handleColorChange}
                disabled={disabled}
            >
                Change to {newBtnColor}
            </button>
            <input
                id={checkboxId}
                type={"checkbox"}
                checked={disabled}
                onChange={handleCheckbox}
            />
            <label htmlFor={checkboxId}>Disable Button</label>
        </div>
    );
}

export default App;
