export default function PersonForm({
  newName,
  newPhone,
  onNewNameChange,
  onNewPhoneChange,
  handleAddName
}) {

  return (
    <form>
      <label>
        name: {' '}
        <input
          type='text'
          onChange={(e) => onNewNameChange(e.target.value)}
          value={newName}
        />
      </label>
      <br />
      <label>
        phone: {' '}
        <input
          type='text'
          onChange={(e) => onNewPhoneChange(e.target.value)}
          value={newPhone}
        />
      </label>
      <div>
        <button type="submit" onClick={handleAddName}>add</button>
      </div>
    </form>
  )
}