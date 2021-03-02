import { useState } from 'react';

function FilterTutorial({ searchTerm, setSearchTerm }) {
    

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <h2>Search Videos</h2>
            <input 
            value={searchTerm} 
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Search videos here...." 
            />
        </div>
    )
}

export default FilterTutorial;