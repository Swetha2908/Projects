import React from 'react'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar-links">
            <a href="">Popular
            <img src={Fire} alt="fire emoji" className="navbar-emoji"/> </a>
            <a href="">Top Rated
            <img src={star} alt="star emoji" className="navbar-emoji"/> </a>
            <a href="">Upcoming
            <img src={party} alt="party emoji" className="navbar-emoji"/> </a>
        </div>
    </nav>
  )
}

export default Navbar