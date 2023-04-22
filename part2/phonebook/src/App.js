import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue,setSearchValue] = useState('')

  const addPerson = (event)=>{
    event.preventDefault()
   
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      const personObj ={
        name: newName,
        number:newNumber,
        id:persons.length+1
      }
      setPersons(persons.concat(personObj))
    }
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange =(e)=>{
    setNewName(e.target.value)
  }

  const handleNumberChange=(e)=>{
    setNewNumber(e.target.value)
  }
  const handleSearchChange=(e)=>{
    setSearchValue(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange} searchValue={searchValue} />
      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>

      <Persons persons={persons} searchValue={searchValue} />
    </div>
  )
}

export default App