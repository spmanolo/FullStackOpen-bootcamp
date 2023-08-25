export default function CountrySearch({ filterText, onFilterTextChange }) {
  return (
    <label>
      find countries: {' '}
      <input
        type='text'
        placeholder='Country...'
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </label>
  )
}