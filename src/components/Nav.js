import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/residential.png'

function Nav() {
  return (
    <>


<header data-bs-theme="dark">
  <div className="collapse text-bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4>The Booking Buddy</h4>
          <p className="text-body-secondary"></p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4>Contact</h4>
          <ul className>
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/room" className="text-white">Room</Link></li>
            <li><Link to="/services" className="text-white">Services</Link></li>
            
            {/* <li><Link to="/Booking" className="text-white">Booking</Link></li> */}
            
            
            <li><Link to="/login" className="text-white">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <Link to ="#" className="navbar-brand d-flex align-items-center">
        <img src={img} alt=""></img>
        <strong>The Booking Buddy</strong>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header> 
</>
  )
}

export default Nav