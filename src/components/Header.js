import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
   <>
    <section className="home">
        <div className="content">
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <img src="../image/image.png" alt=""/>
                    <div className="text">
                        <h1>Spend your Holiday</h1>
                        <p className="sibling">Makes your  Holidays best in our Hotel. </p>
                        <div className="flex">
                            <Link to='/read' ><button className="primary-btn">READ MORE</button></Link> 
                           <Link to ='/contact'> <button className="secondary-btn">CONTACT US</button></Link>
                        </div>
                    </div>
                </div>      
                           
            </div>
        </div>

     </section>
     
{/* check avaibility */}
<section className="book">
    <div className="container flex_space">
        <div className="text">
            <h1><span>Book</span>Your Rooms</h1>
        </div>
        <div className="form">
            <form className="grid">
                <input type="date" placeholder="Araival Date"/>
                <input type="date" placeholder="Depature Date"/>
                <input type="number" placeholder="Adults"/>
                <input type="number" placeholder="Children"/>
                <input type="submit" value="CHECK AVAILABILITY"/>
            </form>
        </div>
    </div>
   </section>
{/* check avaibility */}

{/* about
 */}
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
        <Link to="/about" ><button className="primary-btn">ABOUT US</button></Link> 
        </div>
        <div className="right">
            <img src="../image/h5.jpg" alt=""/>
        </div>
    </div>
   </section>
   {/* <!-- Hotel Rates --> */}
   
   </>
  )
}

export default Header