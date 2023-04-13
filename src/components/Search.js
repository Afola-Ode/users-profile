import React from 'react'

const Search = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className='search'>
      <input type="search" name="" id="" onChange={handleSearchChange} />
    </section>
  )
}

export default Search