import { Search } from 'semantic-ui-react';

function FilterTutorial({ searchTerm, setSearchTerm }) {
    

    function handleChange(event){
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <h2>Search Videos</h2>
            <Search
            value={searchTerm} 
            onSearchChange={handleChange}
            name="name"
            type="text"
            placeholder="Search videos here...." 
            />
        </div>
    )
}

export default FilterTutorial;