import './App.css';
import {useState} from "react";

function App() {
    const [color, setColor] = useState('red');
    const newBtnColor = color === 'red' ? 'blue': 'red'
    const handleColorChange = () => {
            setColor(prev => prev === 'red' ? 'blue': 'red')
    }
    return (
        <div>
            <button
                style={{backgroundColor: color}}
                onClick={handleColorChange}
            >
                Change to {newBtnColor}
            </button>

        </div>
    );
}

export default App;
