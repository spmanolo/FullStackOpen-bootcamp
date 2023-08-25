import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'

export default function App() {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      const { data } = response
      setPersons(data)
    })
  }, [])

  function handleAddName(event) {
    event.preventDefault()

    let coincidencia = false

    persons.forEach(person => {
      if (person.name === newName)
        coincidencia = true
    })

    if (!coincidencia) {
      const newNameToAdd = {
        id: persons.length + 1,
        name: newName,
        phone: newPhone
      }

      setPersons([...persons, newNameToAdd])
      setNewName('')
      setNewPhone('')
    } else {
      alert(newName + ' is already added to phonebook')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newPhone={newPhone}
        onNewNameChange={setNewName}
        onNewPhoneChange={setNewPhone}
        handleAddName={handleAddName}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        filterText={filterText}
      />

    </div>
  )
}

