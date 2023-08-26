import { useState } from 'react'
import { PersonSearch } from './PersonSearch.js'
import { Persons } from './Persons.js'


export default function App() {

  const [filterText, setFilterText] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonSearch
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

      <Persons
        filterText={filterText}
      />

    </div>
  )
}

