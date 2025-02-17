import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <div className="nav-bar">
    <div className="font-bold text-2xl text-zinc-800 "><h1>REACT UI</h1></div>
    <div className="flex gap-7 ">
        <NavLink className="all-links" to="/" exact="true" >Home</NavLink>
        <NavLink className="all-links" to="/about"  >About</NavLink>
        <NavLink className="all-links" to="/contact"  >Contact</NavLink>

    </div>
   </div>
    </>
  )
}

export default Navbar