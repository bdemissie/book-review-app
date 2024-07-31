import React from 'react'
import {useState} from 'react'


function SearchBar() {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        
        setValue(event.target.value)
        console.log(value)
               
    }

    const handleClick = (event) => {

        event.preventDefault();
        
        console.log('Search Value: '+ value);

    }

    return (
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={value}
                onChange={handleChange} />
            <button className="btn btn-outline-light" type="submit" onClick = {handleClick}>Search</button>
        </form>
    )
}

export default SearchBar