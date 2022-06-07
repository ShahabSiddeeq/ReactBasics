import React from 'react';

import './searchBox.style.css';

export const SearchBox = ({placeholder,handleChange}) =>( 
<div className='searchContainer'>
    <h2>Search</h2>
   <input 
        type="search" 
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
</div>
);