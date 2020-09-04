import React from 'react'

function search({handleInput,search}) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text"
                className="searchbox" 
                placeholder="Search for a movie"
                onChange={handleInput}
                onKeyPress={search}
                >
            </input>
        </section>
    )
}

export default search
