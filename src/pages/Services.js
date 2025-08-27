import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
      

    <Nav />
    <main>
    <section className="services">
    <div className="container">
    
      <h1>Our Services</h1>
      <div className="row">    
        <div className="col-md-4">
          <div className="service">
            <i className="fa-solid fa-wifi"></i>
            <h3>Free Wi-Fi</h3>
            <p>Stay connected with our complimentary Wi-Fi service, available throughout the hotel.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fa fa-utensils"></i>
            <h3>Restaurant & Bar</h3>
            <p>Indulge in our delicious cuisine and refreshing cocktail restaurant and bar.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fas fa-spa"></i>
            <h3>Spa & Wellness</h3>
            <p>Unwind and rejuvenate at our spa, offering a range of treatments and therapies.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fas fa-parking"></i>
            <h3>Free Parking</h3>
            <p>Enjoy complimentary parking for all our guests, with ample space available.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fa-solid fa-handshake"></i>
            <h3>Meeting & Event Spaces</h3>
            <p>Host your next event or meeting at our hotel  catering services.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service">
            <i className="fa-solid fa-dumbbell"></i>
            <h3>Fitness Center</h3>
            <p>Stay active during your stay with our fully-equipped fitness center, open 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </main>
    <Footer />    
    
        </div>
  )
}

export default Services