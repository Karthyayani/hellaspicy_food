import React from 'react'
import Pic from "../Navbar/hellalogo.jpeg"
import './Navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg nav">
  <div className="container-fluid">
  <img className='img' src={Pic} alt="logo"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
        <a  className="nav-link" href="#"  ><Link to="/" className='link'><h3>Home</h3></Link></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link" href="#"  ><Link to="/about" className='link'><h3>About Us</h3></Link></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link" href="#"  ><Link to="/menu" className='link'><h3>Menu</h3></Link></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link" href="#"  ><Link to="/Gallery" className='link'><h3>Gallery</h3></Link></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link" href="#"  ><Link to="/Contact" className='Contact'><h3>Contact Us</h3> </Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   
    </>
  )
}
