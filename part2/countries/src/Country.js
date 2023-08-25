export default function Country({ country, onSelectedCountryChange }) {

  return (
    <div>
      {country.name.common}
      <button type='submit' onClick={() => onSelectedCountryChange(country)}>show</button>
    </div >
  )
}