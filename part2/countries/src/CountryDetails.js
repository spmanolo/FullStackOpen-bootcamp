import Weather from './Weather.js'

export default function CountryDetails({ country }) {

  const languageKeys = Object.keys(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <a>capital: {country.capital[0]}<br /></a>
      <a>population: {country.population}<br /></a>

      <h2>Spoken languages</h2>

      <ul>
        {
          languageKeys.map((key) => {
            return <li key={country.languages[key]}>{country.languages[key]}</li>
          })
        }
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} height={128} />

      <Weather city={country.capital} />

    </div>
  )
}