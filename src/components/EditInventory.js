import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { db } from '../firebase';
import { set, ref, onValue } from 'firebase/database';

const EditInventory = () => {
  const [searchValue, setsearchValue] = useState("")
  const [searchValueSave, setsearchValueSave] = useState("")
  const [searchResult, setsearchResult] = useState([])
  const [BookStore, setBookStore] = useState("")
  const [Api, setApi] = useState("AIzaSyDdlsy67CsuQHMpFdrXDLfVNouQqXCUt2w")
  const [uniqueBooks,setuniqueBooks] = useState([])

  
  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchValue+"&maxResults=20&key="+Api).then((incoming)=>{
        setsearchResult(incoming.data.items)
    })
    setsearchResult([])
    setsearchValueSave(searchValue)
    setsearchValue("")
  }
  function addBook(id){
    var count = 0
    const adding = [...searchResult].filter((addbook)=> addbook.id === id)
    const BooksDuplicate = [...BookStore].concat(adding).map((book)=>{
      if(id!==book.id){
        book.count = book.count
      }else{
        count = count+1
        book.count = count
      }
      return book
    })
    setBookStore([...BooksDuplicate])
    const unique = Array.from(new Set([...BookStore].concat(adding)))
    setuniqueBooks(unique)
  }
  function deleteBook(id){
    
    const BooksDuplicate = [...uniqueBooks].map((book)=>{
      if(id===book.id){
        if(book.count<1){
          book.count = 0
        }else{
          book.count = book.count-1
        }
      }
      return book
    })
    setBookStore([...BooksDuplicate])
    const unique = Array.from(new Set([...BookStore]))
    setuniqueBooks(unique)
  }
  React.useEffect(() => {
    
    onValue(ref(db, `/`), (snapshot)=> {
      setBookStore([])
      const data = snapshot.val()
      if(data!==null){
        Object.values(data).map((books)=>{
          setBookStore((oldArray)=> [...oldArray, books]);
        })
      }
    })
  }, [])
  React.useEffect(() => {
    uniqueBooks.map((book)=>{
      set(ref(db, `/${book.id}`), book)
    })
  }, [])
  
  
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
            : `${Book.volumeInfo.imageLinks.thumbnail}`} alt="No Thumbnail"></img></div><span>{Book.volumeInfo.title}</span><span>By {Book.volumeInfo.authors[0]}</span><button onClick={()=>addBook(Book.id)}>Add</button><button onClick={()=>deleteBook(Book.id)}>Delete</button></div>
      ))}
      </div>
    </div>
  )
}

export default EditInventory