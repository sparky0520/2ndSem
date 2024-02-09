import "./css/window.css"
import React from "react"
import { useState } from "react";

// Define an interface for the props
interface WindowProps {
    content: React.ReactNode;
}

// Define the functional component and specify the type of props
const Window: React.FC<WindowProps> = (props) => {
    return (
        <div className="window">
            {props.content}
        </div>
    );
}

export default Window