import React from 'react'
import {useState} from 'react'

function SearchInput({className}) {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        
        setValue(event.target.value)
        
    }

  return (
    <input 
        className={className} 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        value = {value}
        onChange = {handleChange}/>
  )
}

export default SearchInput