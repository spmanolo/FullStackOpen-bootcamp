import { useEffect, useState } from 'react'
import {
  getAll as getPersons,
  create as createPerson,
  remove as deletePerson,
  update as changePerson
} from './services/persons'
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
    let id = 0

    persons.forEach(person => {
      if (person.name === newPerson.name) {
        coincidencia = true
        id = person.id
      }
    })

    if (!coincidencia) {
      const newPersonToAdd = {
        name: newPerson.name,
        number: newPerson.number
      }
      createPerson(newPersonToAdd)
        .then(person => {
          setPersons(prevPersons => prevPersons.concat(person))
        })
      setNewPerson('')
    } else if (window.confirm(newPerson.name + ' is already added to phonebook, replace the old number with a new one?')) {
      const person = persons.find(p => p.id === id)
      const changedPerson = { ...person, number: newPerson.number }

      changePerson(changedPerson).then(newP => {
        setPersons(persons.map(p => p.id !== changedPerson.id ? p : newP))
      })
    }
  }


  function handleDeletePerson(id) {
    const person = persons.find(p => p.id === id)
    if (window.confirm('Do you want to remove ' + person.name + ' from the phonebook?')) {
      deletePerson(id)
      setNewPerson('')
    }
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