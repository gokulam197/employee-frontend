import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar" >
      <Link to="/" >Home</Link>
      <Link to="/employee-form">Employee Form</Link>
    </nav>
  );
};

export default Navbar;