import './App.css';
import {useState} from "react";

function App() {
    const [color, setColor] = useState('red');
    const newBtnColor = color === 'red' ? 'blue' : 'red'
    const handleColorChange = () => {
        setColor(prev => prev === 'red' ? 'blue' : 'red')
    }
    return (
        <div>
            <button
                className={color}
                onClick={handleColorChange}
            >
                Change to {newBtnColor}
            </button>
            <input
                type={"checkbox"}
            />
        </div>
    );
}

export default App;
