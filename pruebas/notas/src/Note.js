export default function Note({ title, body }) {
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  )
}