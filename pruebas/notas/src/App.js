import { useEffect, useState } from 'react'
import Note from './Note.js'
import axios from 'axios'

export default function App() {
  // if (typeof notes === 'undefined' || notes.length === 0) {
  //   return 'No tenemos notas que mostrar'
  // }

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const { data } = response
      setNotes(data)
      setLoading(false)
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }

    setNotes([...notes, noteToAddToState])
    setNewNote('')  // refrescar el searchbar
  }

  return (
    <div>
      <h1>Notes</h1>

      {loading ? "Cargando notas..." : ""}

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setNewNote(e.target.value)} value={newNote} />
        <button>Crear nota</button>
      </form>

      <ol>
        {notes
          .map((note) => {
            // return <Note key={note.id} content={note.content} date={note.date} />
            return <Note key={note.id} {...note} />
          })}
      </ol>
    </div>
  )
}