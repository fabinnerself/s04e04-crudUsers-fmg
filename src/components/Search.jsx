import React, {  useRef, useState } from 'react'
import './search.css'


function Search({setQueryUser}) {
    const [error, setError] = useState()
    const inputRef = useRef() 

    const onSubmit = (e) => {
        e.preventDefault()
        const querySearch = inputRef.current.value
 
        console.log("in check src ", querySearch)       

        setQueryUser(querySearch);
        
    }


  return (
    <>    
        <form onSubmit={onSubmit} className='search'>         
            <input ref={inputRef} type='text' className='search__input' placeholder='Enter a name, email or a date'  ></input>            
            <button className='search__btn'>Search</button>
        </form>
        <p className='message__error'>{error && error}</p>     
    </>
  )
}

export default Search