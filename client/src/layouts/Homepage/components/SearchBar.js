import React from 'react'
import { useState } from 'react'

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
        <form className="input-group mb-3 w-75 mx-auto">
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={handleChange}
                placeholder="Search by title, author, or genre" />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-light px-3"
                    type="button"
                    onClick={handleClick}>
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar