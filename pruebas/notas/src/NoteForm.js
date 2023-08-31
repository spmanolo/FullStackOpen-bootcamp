export function NoteForm({ newNote, onNewNoteChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={(e) => onNewNoteChange(e.target.value)} value={newNote} />
      <button>Crear nota</button>
    </form>
  )
}
