import React from 'react'

function Note(props){
    function handleClick(){
        props.onDel(props.id)
    }
    return(
        <div style={{display:"inline-block" ,border: '1px solid black',width: "auto" }}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button type='submit' onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Note