import { useState } from 'react'
import { Persons } from './Persons.js'


export default function App() {

  const [filterText, setFilterText] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <Persons
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

    </div>
  )
}

