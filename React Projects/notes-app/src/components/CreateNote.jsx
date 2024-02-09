import React,{useState} from 'react'

function CreateNote(props){
    const [newNote,setNewNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name,value}  = event.target
        setNewNote({...newNote,[name]: value})
    }
    function handleSubmit(event){
        props.onAdd(newNote)

        setNewNote({
            title:"",
            content:""
        })
        
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create New Note</h1>
            <p>Title</p>
            <input type="text" onChange={handleChange} name="title" value={newNote.title}/>
            <p>Content</p>
            <input type="text" onChange={handleChange} name="content" value={newNote.content}/>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default CreateNote