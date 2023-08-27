import { useEffect, useState } from 'react'
import {
  getAll as getPersons,
  create as createPerson,
  remove as deletePerson,
  update as changePerson
} from './services/persons'
import { PersonForm, PersonList, PersonSearch } from './Person.js'
import { add as MessageAdd, error as MessageError } from './Notification.js'

export function Persons({ filterText, onFilterTextChange }) {

  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    getPersons().then(persons => {
      setPersons(persons)
    })
  }, [])

  function handleAddPerson(event) {
    event.preventDefault()

    const target = event.target
    const newNameToAdd = target.nombre.value
    const newNumberToAdd = target.number.value

    const newPersonToAdd = {
      name: newNameToAdd,
      number: newNumberToAdd
    }

    let coincidencia = false
    let id = 0

    persons.forEach(person => {
      if (person.name === newPersonToAdd.name) {
        coincidencia = true
        id = person.id
      }
    })

    if (!coincidencia) {
      createPerson(newPersonToAdd)
        .then(person => {
          setPersons(prevPersons => prevPersons.concat(person))
          setError(false)
          setMessage(`${person.name} added to phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
      setNewPerson('')
    } else if (window.confirm(newPersonToAdd.name + ' is already added to phonebook, replace the old number with a new one?')) {
      const person = persons.find(p => p.id === id)
      const changedPerson = { ...person, number: newPersonToAdd.number }

      changePerson(changedPerson)
        .then(newP => {
          setPersons(persons.map(p => p.id !== changedPerson.id ? p : newP))
        })
        .catch(e => {
          setError(true)
          setMessage(`'${changedPerson.name}' was already removed from server`)
          setTimeout(() => {
            setMessage(null)
            setError(false)
          }, 4000)
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

  const filterListOfPersons = persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div>

      {error
        ? <MessageError message={message} />
        : <MessageAdd message={message} />
      }

      <PersonSearch
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />

      <PersonForm
        newPerson={newPerson}
        handleAddPerson={handleAddPerson}
      />

      <h2>Numbers</h2>
      <PersonList
        filteredList={filterListOfPersons}
        handleDeletePerson={handleDeletePerson}
      />

    </div >
  )
}