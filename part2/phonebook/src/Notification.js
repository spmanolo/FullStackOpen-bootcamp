export function add({ message }) {
  if (message === null)
    return null

  return (
    <div className="msg-add">
      {message}
    </div>
  )
}

export function error({ message }) {
  if (message === null)
    return null

  return (
    <div className="error">
      {message}
    </div>
  )
}