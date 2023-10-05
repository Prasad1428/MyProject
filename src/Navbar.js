import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-item' >
        <h2 id='brand-logo'>Brand Logo</h2>
      </div>
      <div className='nav-item' >
        <span>Home</span>
      </div>
      <div className='nav-item' >
        <span>Product</span>
      </div>
      <div className='nav-item' >
        <span>Pricing</span>
      </div>
      <div className='nav-item' >
        <span>FAQ</span>
      </div>
      <div className='nav-item' >
        <span>Blog</span>
      </div>
      <div className='nav-item btns'>
       <button className='btn  btn-outline-secondary navbar-bt1'>Login</button>
       <button className='btn  btn-outline-secondary navbar-bt2'>Sign up</button>
      </div>
      
    </div>
  )
}

export default Navbar
