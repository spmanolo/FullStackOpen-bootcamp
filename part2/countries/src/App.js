import { useState } from 'react'
import CountrySearch from './CountrySearch.js'
import Countries from './Countries.js'

export default function App() {

  const [filterText, setFilterText] = useState('')

  return (
    <div>
      <CountrySearch
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <br />
      <Countries
        filterText={filterText}
      />
    </div>

  );
}

