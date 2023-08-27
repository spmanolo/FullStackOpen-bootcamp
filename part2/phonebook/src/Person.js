export function PersonSearch({ filterText, onFilterTextChange }) {
  return (
    <label>
      filter shown whith
      <input
        type='text'
        placeholder='Buscar...'
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)
        }
      />
    </label >
  )
}

export function PersonForm({ newPerson, handleAddPerson }) {
  return (
    <div>
      <h2>add a new</h2>

      <form onSubmit={handleAddPerson}>
        <label>
          name: {' '}
          <input
            type='text'
            name="nombre"
            value={newPerson.name}
          />
        </label>
        <br />
        <label>
          number: {' '}
          <input
            type='text'
            name="number"
            value={newPerson.number}
          />
        </label>
        <div>
          <button>add</button>
        </div>
      </form>
    </div >

  )
}

export function PersonList({ filteredList, handleDeletePerson }) {
  return (
    filteredList.map(person => {
      return <Person key={person.id}
        person={person}
        handleDeletePerson={handleDeletePerson} />
    })
  )
}

export function Person({ person, handleDeletePerson }) {
  return (
    <div>
      {person.name + ' ' + person.number}
      <button type='submit' onClick={() => handleDeletePerson(person.id)}>delete</button>
    </div>
  )
}