export function PersonSearch({ filterText, onFilterTextChange }) {
  return (
    < label >
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