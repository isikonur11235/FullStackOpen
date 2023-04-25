const Persons=({persons,searchValue,deletePerson})=>{
    return (
    persons.map(person => {
        if(person.name.toLowerCase().includes(searchValue.toLocaleLowerCase())){
          return <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>
        }else{
          return <div key={person.id}></div>
        }
      }))
}

export default Persons