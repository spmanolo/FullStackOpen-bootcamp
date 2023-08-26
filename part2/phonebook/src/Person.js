export function Person({ person, handleDeletePerson }) {
  return (
    <div>
      {person.name + ' ' + person.number}
      <button type='submit' onClick={() => handleDeletePerson(person.id)}>delete</button>
    </div>
  )
}