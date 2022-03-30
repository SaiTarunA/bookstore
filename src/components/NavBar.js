import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (
    <div >
        <Link className='Link' style={{margin: "20px"}} to="/">Search Books</Link>
        <Link className='Link' style={{margin: "20px"}} to="/Inventory">Inventory</Link>
        <Link className='Link' style={{margin: "20px"}} to="/Edit">Edit Inventory</Link>
    </div>
  )
}

export default NavBar