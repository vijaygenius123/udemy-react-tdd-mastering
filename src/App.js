import './App.css';
import {useState} from "react";

function App() {
    const [color, setColor] = useState('red');
    const [disabled, setDisabled] = useState(false);

    const newBtnColor = color === 'red' ? 'blue' : 'red'
    const handleColorChange = () => {
        setColor(prev => prev === 'red' ? 'blue' : 'red')
    }
    const handleCheckbox = () => {
        setDisabled(prev => prev === true ? false : true)
    }
    return (
        <div>
            <button
                className={color}
                onClick={handleColorChange}
                disabled={disabled}
            >
                Change to {newBtnColor}
            </button>
            <input
                type={"checkbox"}
                checked={disabled}
                onChange={handleCheckbox}
            />
        </div>
    );
}

export default App;
