import React from 'react'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Booking() {
  return (
    <>
    <Nav/>
    <main>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="text-center">Book Now</h1>
                <form >
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="name"><b>Name:</b></label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="email"><b>Email:</b></label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your Email"/>
                    </div>
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="phone"><b>Phone:</b></label>
                        <input type="tel" className="form-control" id="phone" placeholder="  Enter your Contact number"/>
                    </div>
                    
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="date"><b> Arrival Date:</b></label>
                        <input type="date" className="form-control" id="date"/>
                    </div>
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="date"><b> Dispature Date:</b></label>
                        <input type="date" className="form-control" id="date"/>
                    </div>
                    <div className="form-group" style={{color: 'white'}}>
                        <label for="time"><b>Time:</b></label>
                        <input type="time" className="form-control" id="time"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                </form>
            </div>
        </div>
    </div>
    </main>
    <Footer/>
    </>
  )
}

export default Booking