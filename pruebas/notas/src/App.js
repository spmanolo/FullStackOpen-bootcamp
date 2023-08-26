import { useEffect, useState } from 'react'
import Note from './Note.js'
import { create as createNote, getAll as getAllNotes, update as changeNote } from './services/notes'

export default function App() {
  // if (typeof notes === 'undefined' || notes.length === 0) {
  //   return 'No tenemos notas que mostrar'
  // }

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  function toggleImportanceOf(id) {
    const note = notes.find(n => n.id == id)
    const changedNote = { ...note, important: !note.important }

    changeNote(changedNote).then(newNote => {
      setNotes(notes.map(note => note.id !== id ? note : newNote))
    })
  }

  useEffect(() => {
    setLoading(true)
    getAllNotes().then(notes => {
      setNotes(notes)
      setLoading(false)
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
      important: Math.random() % 2
    }

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })
      .catch((e) => {
        console.error(e)
      })

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
            return <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
          })}
      </ol>
    </div>
  )
}