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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={(e)=>setsearchValue(e.target.value)} value={searchValue} name="inputName"/>
        <button type="submit">Search</button>
        {searchValueSave!==""?<div>Search results for {searchValueSave}</div> : "" }
      </form>
      <div style={{display: "flex", flexWrap: "wrap", width: "max-width"}}>
      {searchResult.map(Book=>(
          <div style={{display: "flex", flexDirection: "column", width: "150px"}}><div style={{width: "120px", height: "180px", margin:"0px auto", overflow:"hidden"}}><img style={{width: "120px"}} src={Book.volumeInfo.imageLinks === undefined
            ? ""
            : `${Book.volumeInfo.imageLinks.thumbnail}`} alt="No Thumbnail"></img></div><span>{Book.volumeInfo.title}</span><span>By {Book.volumeInfo.authors[0]}</span></div>
      ))}
      </div>
    </div>
  )
}

export default Search