import React from 'react'
import './header.css';

const Header = () => {
  return (
    <>
    <div className="container">
        
        <div className="logo">
            <h3>GENIUS</h3>
            <span>TUTOR</span>
        </div>
        <div className="search">
            <input type="text" className="search-box" placeholder='Search for a subject, tutor or course'/>
            <input type="submit" className="search-btn" value='Search'/>
        </div>
        <div className="social">
            <i className="fab fa-facebook icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-telegram icon"></i>
        </div>
    </div>
    <nav className="navbar flex">
        <ul className='flex nav-menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Subjects</a></li>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Our Tutors</a></li>
            <li><a href='/'>Contact Us</a></li>
        </ul>
        <button className='ham-btn'><i class="fa-solid fa-bars"></i></button>
        <button className='nav-btn'>LOGIN <i className="fas fa-sign-in"></i></button>
    </nav>
    </>
  )
}

export default Header