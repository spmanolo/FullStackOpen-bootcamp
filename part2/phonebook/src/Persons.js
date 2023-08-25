export default function Persons({ persons = [], filterText }) {
  return (
    <ol>
      {persons
        .filter(person => {
          return (person.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ? false : true)
        })
        .map(person => {
          return <li key={person.id}> {person.name} {person.phone} </li>
        })
      }
    </ol>

  )
}