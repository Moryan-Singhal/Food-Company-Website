import React from 'react'
import './f.css'
import logo from '../../assets/logo.png'
import social from '../../assets/socialmedia.png'
import insta from '../../assets/insta.png'

const Footer1 = () => {
  return (
    <>
      <div className='footer'>
        <div className='logo'>
          <img src={logo} width={250}/>
        </div>

        <div className='icons'>
          <div className='social'>
            <img src={social}/>
          </div>
          <div className='insta'>
            <img src={insta}/>
          </div>
          
        </div>

        <div className='copywright'>
          Copywright 2020 Bella Onojie.com
        </div>
      </div>
    </>
  )
}

export default Footer1