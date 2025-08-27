import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


function Read() {
  return (
  <>
  <Nav/>
   <section className="about top">
    <div className="container flex">
        <div className="left">
            <div className="heading">
                <h1>WELCOME</h1>
                <h2>Our Booking Buddy Hotel</h2>
            </div>
            <p>Welcome to The Booking Buddy, where luxury meets 
        comfort and every stay is an unforgettable experience. 
        our hotel offers a perfect blend of modern amenities 
        and classic charm.</p>
                  {/* <button className="primary-btn">ABOUT US</button> */}
        </div>
        <div className="right">
            <img src="../image/Logob.jpg" alt=""/>
        </div>
    </div>
   </section>
   <Footer/>
  </>
  )
}

export default Read