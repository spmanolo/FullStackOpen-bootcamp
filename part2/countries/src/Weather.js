import axios from "axios"
import { useEffect, useState } from "react"

export default function Weather({ city }) {

  const ACCESS_KEY = process.env.REACT_APP_API_KEY
  const apiURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
  const URL = apiURL + city + '?key=' + ACCESS_KEY

  const [weather, setWeather] = useState({
    temp: 0,
    wind: 0
  })

  useEffect(() => {
    axios.get(URL).then(res => {
      const { data } = res
      setWeather({
        temp: parseInt((data.currentConditions.temp - 32) * 5 / 9),   // pasar de F a Cº
        wind: data.currentConditions.windspeed
      })
    })
  }, [weather])

  return (
    <div>
      <h2>Wheather in {city}</h2>
      <strong>temperature: </strong>
      <a>{weather.temp} Celsius<br /></a>
      <strong>wind: </strong>
      <a>{weather.wind} mph<br /></a>
    </div>
  )
}