import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='success'>
      {message}
    </div>
  )
}
const Error = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null
  }

  return (
    <div className='error'>
      {errorMessage}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [message,setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event)=>{
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    if(person !== undefined){
      const isConfirm = window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)
      if(isConfirm){
        const personObj ={
          ...person,
          number:newNumber
        }
        personService
        .update(person.id,personObj)
        .then(response => {
          const newPersons = persons.filter(person => person.name !== newName)
          setPersons(newPersons.concat(response.data))
          setMessage(
            `Number changed`
          )
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
      }
    }else{
      const personObj ={
        name: newName,
        number:newNumber
      }
      personService
      .create(personObj)
      .then(response => {
        setPersons(persons.concat(response.data))
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        },3000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson=(id)=>{
    const person = persons.find(person => person.id === id)
    const isConfirm = window.confirm(`Do you want to delete ${person.name}?`)

    if(isConfirm){
      const newPersons = persons.filter(person => person.id !== id)
      personService
      .remove(id)
      .then(response => {
        setPersons(newPersons)
        setMessage(`${person.name} deleted`)
        setTimeout(() => {
          setMessage(null)
        },3000)
      })
      .catch(error => {
        setErrorMessage(`Information of ${person.name} has already been deleted from the server`)
        setTimeout(() => {
          setErrorMessage(null)
        },3000)
        setPersons(persons.filter(p => p.id !== id))
      })
    }
   
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
      <Notification message={message} />
      <Error errorMessage={errorMessage} />
      <Filter handleSearchChange={handleSearchChange} searchValue={searchValue} />
      <h3>Add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>

      <Persons persons={persons} searchValue={searchValue} deletePerson={deletePerson} />
    </div>
  )
}

export default App