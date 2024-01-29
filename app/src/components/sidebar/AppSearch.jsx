// AppSearch.jsx
import React, { useState } from 'react';

function Search({ onSearchChange }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearchChange(term);
    };

    return (
        <>
            <div id="search-contacts" className="p-2 flex-shrink-0">
                <i className="fa-solid fa-search text-muted"></i>
                <input type="text" className="w-100" placeholder="Cerca contatto" value={searchTerm} onChange={handleChange} />
            </div>
        </>
    );
}

export default Search;
