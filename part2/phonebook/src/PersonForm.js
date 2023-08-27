export function PersonForm({
  newPerson,
  onNewPersonChange,
  handleAddPerson
}) {

  return (
    <div>
      <h2>add a new</h2>

      <form onSubmit={handleAddPerson}>
        <label>
          name: {' '}
          <input
            type='text'
            onChange={(e) => onNewPersonChange({ ...newPerson, name: e.target.value })}
          />
        </label>
        <br />
        <label>
          number: {' '}
          <input
            type='text'
            onChange={(e) => onNewPersonChange({ ...newPerson, number: e.target.value })}
          />
        </label>
        <div>
          <button>add</button>
        </div>
      </form>
    </div >

  )
}