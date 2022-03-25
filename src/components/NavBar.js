import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div >
        <Link style={{margin: "20px"}} to="/">Search Books</Link>
        <Link style={{margin: "20px"}} to="/Inventory">Inventory</Link>
        <Link style={{margin: "20px"}} to="/Edit">Edit Inventory</Link>
    </div>
  )
}

export default NavBar