import React from 'react'
import './nav.css'
import navimg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Logo'>
          <img src={navimg} width={225}/>
      </div>
      <div className='emptyspace'></div>
      <div className='navbuttons'>
        <button className='nav.button' id='Home'>Home</button>
        <button className='nav.button' id='Product'>Product</button>
        <button className='nav.button' id='Faq'>Faq</button>
        <button className='nav.button' id='Contact'>Contact</button>
      </div>
      <div className='hamburger'>
        <button>
          <div></div><div></div><div></div>
        </button>
      </div>
    </div>
  )
}

export default Navbar