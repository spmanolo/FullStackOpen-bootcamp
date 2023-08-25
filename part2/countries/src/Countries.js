import CountryDetails from './CountryDetails.js'
import Country from './Country.js'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Countries({ filterText }) {

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState()

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      const { data } = response
      setCountries(data)
    })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filterText.toLowerCase())
  )

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0])
    } else if (filterText === '') {
      setSelectedCountry()
    }
  }, [filteredCountries])

  const listOfCountries = filteredCountries.map(country => {
    return <Country key={country.name.common}
      country={country}
      onSelectedCountryChange={setSelectedCountry}
    />
  })

  if (filteredCountries.length > 10 || filteredCountries === 0) {
    return <p>Too many matches</p>
  }

  return (
    <div>
      {filteredCountries.length > 1 && listOfCountries}
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div >
  )

}