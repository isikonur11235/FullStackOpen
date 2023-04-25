import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ showCountries }) => {
  if (showCountries.length < 10) {
    return showCountries.map((country) => {
      return (
        <div key={country.cca3}>
          <p>{country.name.common}</p> <button>show</button>
        </div>
      );
    });
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};


const App = () => {
 
  const [countries, setCountries] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [showCountries,setShowCountries] = useState([])

  useEffect(() => {
   axios
   .get('https://restcountries.com/v3.1/all')
   .then(response => {
    setCountries(response.data)
  })
  }, [])

  useEffect(() => {
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    )
    setShowCountries(filteredCountries)
  }, [searchValue, countries])

  
  const handleSearch  = (event) => {


    setSearchValue(event.target.value)
   
  }


  return (
    <div>
      find countries: <input onChange={handleSearch} />
      <Country showCountries={showCountries} />
    </div>
  )
}

export default App