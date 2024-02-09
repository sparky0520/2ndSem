import './css/keypad.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import PercentIcon from '@mui/icons-material/Percent';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { useState } from 'react';

function Keypad() {
    
    const [content, setContent] = useState([]);

    function handleClick(event){
        const {value} =  event.target;
        setContent([
            ...content,
            value
        ])
    }
    return (
        <div className="keypad">
            <div className='numbers'>
                <div className="buttonRow">
                    <button className="button grey" onClick={handleClick}>AC</button>
                    <button className="button grey" onClick={handleClick}><BackspaceOutlinedIcon className="grey" fontSize='inherit' /></button>
                    <button className="button grey" onClick={handleClick}><PercentIcon fontSize='inherit' /></button>
                    <button className="button orange" onClick={handleClick}><svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="14" width="25" height="4" fill="white" />
                        <circle cx="18" cy="9" r="3" fill="white" />
                        <circle cx="18" cy="23" r="3" fill="white" />
                    </svg>
                    </button>
                </div>
                <div className="buttonRow">
                    <button className="button dark" onClick={handleClick}>7</button>
                    <button className="button dark" onClick={handleClick}>8</button>
                    <button className="button dark" onClick={handleClick}>9</button>
                    <button className="button orange" onClick={handleClick}><CloseIcon fontSize='inherit' /></button>
                </div>
                <div className="buttonRow">
                    <button className="button dark" onClick={handleClick}>4</button>
                    <button className="button dark" onClick={handleClick}>5</button>
                    <button className="button dark" onClick={handleClick}>6</button>
                    <button className="button orange" onClick={handleClick}><RemoveIcon fontSize='inherit' /></button>
                </div>
                <div className="buttonRow">
                    <button className="button dark" onClick={handleClick}>1</button>
                    <button className="button dark" onClick={handleClick}>2</button>
                    <button className="button dark" onClick={handleClick}>3</button>
                    <button className="button orange" onClick={handleClick}><AddIcon fontSize='inherit' /></button>
                </div>
                <div className="buttonRow">
                    <button className="button dark" id="last" onClick={handleClick}>0</button>
                    <button className="button dark" onClick={handleClick}>.</button>
                    <button className="button orange" onClick={handleClick}><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="29" height="5" fill="white" />
                        <rect y="11" width="29" height="5" fill="white" />
                    </svg></button>
                </div></div>
            <div className='navbar'></div>
        </div>
    )
}

export default Keypad