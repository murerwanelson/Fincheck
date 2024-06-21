
import React, { useState } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // Make API call to search endpoint
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchComponent;
