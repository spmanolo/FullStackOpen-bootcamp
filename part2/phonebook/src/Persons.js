import { useEffect, useState } from 'react'
import { getAll as getPersons, create as createPerson, remove as deletePerson } from './services/persons'
import { PersonForm } from './PersonForm.js'
import { Person } from './Person.js'

export function Persons({ filterText }) {

  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')

  useEffect(() => {
    getPersons().then(persons => {
      setPersons(persons)
    })
  }, [])

  function handleAddPerson(event) {
    event.preventDefault()

    let coincidencia = false

    persons.forEach(person => {
      if (person.name === newPerson.name)
        coincidencia = true
    })

    if (!coincidencia) {
      createPerson(newPerson).then(person => {
        setPersons(prevPersons => prevPersons.concat(person))
      })
      setNewPerson('')
    } else {
      alert(newPerson.name + ' is already added to phonebook')
    }
  }

  function handleDeletePerson(id) {
    deletePerson(id)
  }

  const listOfPersons = persons
    .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
    .map(person => {
      return <Person key={person.id}
        person={person}
        handleDeletePerson={handleDeletePerson}
      />
    })

  return (
    <div>
      <PersonForm
        newPerson={newPerson}
        onNewPersonChange={setNewPerson}
        handleAddPerson={handleAddPerson}
      />

      <h2>Numbers</h2>
      {listOfPersons}
    </div>
  )
}