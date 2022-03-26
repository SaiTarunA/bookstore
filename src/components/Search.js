import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [searchValue, setsearchValue] = useState("")
  const [searchValueSave, setsearchValueSave] = useState("")
  const [searchResult, setsearchResult] = useState([])
  const [Api, setApi] = useState("AIzaSyDdlsy67CsuQHMpFdrXDLfVNouQqXCUt2w")
  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchValue+"&maxResults=20&key="+Api).then((incoming)=>{
        setsearchResult(incoming.data.items)
    })
    setsearchResult([])
    setsearchValueSave(searchValue)
    setsearchValue("")
  }
  return (
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={(e)=>setsearchValue(e.target.value)} value={searchValue} name="inputName"/>
        <button type="submit">Search</button>
        {searchValueSave!==""?<div>Search results for {searchValueSave}</div> : "" }
      </form>
      <div className='ResultsComp'>
      {searchResult.map(Book=>(
          <div className='Card'><div className='Img'><img style={{width: "155px"}} src={Book.volumeInfo.imageLinks === undefined
            ? ""
            : `${Book.volumeInfo.imageLinks.thumbnail}`} alt="No Thumbnail"></img></div><div className='BookInfo'><p>{Book.volumeInfo.title}</p><p>By {Book.volumeInfo.authors[0]}</p></div></div>
      ))}
      </div>
    </div>
  )
}

export default Search