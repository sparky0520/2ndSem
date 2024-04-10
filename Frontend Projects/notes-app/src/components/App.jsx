import React,{ useState } from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'

function App() {
  const [notes, setNotes] = useState([])

  function addItem(newNote){
    setNotes([
      ...notes,
      newNote
    ])
  }
  function deleteItem(id){
    setNotes(
      notes.filter((ele,index) => {
        return index!=id
      })
    )
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addItem}/>
      <div id='notesHTML'>
      {notes.map((element,index) => {
        return <Note 
            key={index} 
            id={index} 
            title={element.title} 
            content={element.content} 
            onDel={deleteItem}
          />
      })}
      </div>
    </div>
  )
}

export default App
