export function Note({ note, toggleImportance }) {
  const { title, body, important } = note

  const label = important
    ? 'make not important'
    : 'make important'

  return (
    <li className="note">
      <p>{title}</p>
      <small>{body} <br /> </small>
      <small>{important ? 'Importante' : 'No importante'}</small>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
