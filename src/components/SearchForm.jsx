import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')
  // console.log(searchValue.current.value);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
    // console.log(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite drink</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm