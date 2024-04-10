import "./css/window.css"
import React from "react"
import { useState } from "react";

// Define the functional component and specify the type of props
function Window(props){
    
    const [content, setContent] = useState(0);
    return (
        <div className="window">
            {props.content}
        </div>
    );
}

export default Window
