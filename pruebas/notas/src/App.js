import { useEffect, useState } from 'react'
import { Note } from './Note.js'
import { error as MessageError, add as MessageAdd } from './Notification.js'
import { NoteForm } from './NoteForm.js'
import { create as createNote, getAll as getAllNotes, update as changeNote } from './services/notes.js'

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [notMessage, setNotMessage] = useState(null)
  const [error, setError] = useState(false)

  function toggleImportanceOf(id) {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    changeNote(changedNote)
      .then(newNote => {
        setNotes(notes.map(note => note.id !== id ? note : newNote))
      })
      .catch(error => {
        setError(true)
        setNotMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setNotMessage(null)
          setError(false)
        }, 5000)
      })
    setNotes(notes.filter(n => n.id !== id))
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
      content: newNote
    }

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
        setError(false)
        setNotMessage(`Note '${newNote.content}' has added to NOTES`)
        setTimeout(() => {
          setNotMessage(null)
        }, 5000)
      })

    setNewNote('') // refrescar el searchbar
  }

  return (
    <div>
      <h1>Notes</h1>

      {error
        ? <MessageError message={notMessage} />
        : <MessageAdd message={notMessage} />}

      {loading ? 'Cargando notas...' : ''}

      <NoteForm newNote={newNote} onNewNoteChange={setNewNote} handleSubmit={handleSubmit} />

      <ol>
        {notes
          .map((note) => {
            return <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
          })}
      </ol>
    </div>
  )
}
