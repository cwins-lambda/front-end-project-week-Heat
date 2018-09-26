import React, {  } from 'react';

export const SearchBar = props => {

    return (
        <form className="search-form" onSubmit={props.filterNotes} >
            <input 
                name="searchQuery"
                value={props.searchQuery}
                onChange={props.handleInputChange}
                placeholder='Search Notes' 
                className="search-bar" 
            />
        </form>
    )
}

