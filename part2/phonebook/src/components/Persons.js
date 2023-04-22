const Persons=({persons,searchValue})=>{
    return (
    persons.map(person => {
        if(person.name.toLowerCase().includes(searchValue.toLocaleLowerCase())){
          return <p key={person.id}>{person.name} {person.number}</p>
        }else{
          return <div key={person.id}></div>
        }
      }))
}

export default Persons