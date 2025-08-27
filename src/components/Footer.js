import React from 'react'

import img from './images/residential.png'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div>
<footer>
<div className="container grid">
        <div className="box">
            <img src={img} />
            <p>Booking Buddy is an innovative hotel booking
                 platform designed to streamline the reservation
                  process for travelers worldwide. Our website 
                  provides a user-friendly interface, comprehensive
                   hotel information, and competitive pricing to ensure
                    a seamless and enjoyable booking experience.
           .</p>
                <div className="icon">
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-youtube"></i>
                </div>
        </div>
        <div className="box">
            <h2 id="pink">Links</h2>
            <ul>
                
                <Link to='/about'><li>About us</li></Link>
                <Link to='/contact'><li>Contact us</li></Link>
                <Link to='/services'><li>Services</li></Link>
                
            </ul>
        </div>
        <div className="box">
            <h2 id="pink">Contact us</h2>
            <p>At Booking Buddy, we are dedicated to providing exceptional customer service and support. . </p>
                 <i className="fa fa-location-dot"></i>
                 <label id="red">211 shanti vihar jalandhar</label><br/>
                 <i className="fa fa-phone"></i>
                 <label id="red">[+91] 8968865837</label><br/>
                 <i className="fa fa-envelope"></i>
                 <label id="red">sukhjinders1503@gmail.com</label><br/>
        </div>
    </div>    
   </footer>
   <div className="legal">
    <p >Copyright(c) 2024 | Copyright Holder All Rights Reserved.</p>
   </div>
   
   



    </div>
  )
}

export default Footer