import React from 'react';


export const Search = ({handleInput, handleSubmit}) => {
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search Movie"
                onChange={handleInput}
                >
            </input>
            
            <button type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
        
    )
}
