import React, {useState, createContext, useEffect } from 'react'
export const SearchContext = createContext();



function SearchProvider(props) {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    

    return (
        <SearchContext.Provider value={[search, setSearch,  result, setResult]}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchProvider