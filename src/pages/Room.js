import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
function Room() {
  return (
    <div>
      
    <Nav />
    <main>
 
    <header className="parent">
        <h1>OUR ROOMS</h1>
    </header> 
        
    <div className="card-container">
        <div className="card">
            <img src="../image/r1.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 2000/- </p>
                 
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r2.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 1500/- </p>
                 
                <Link to="/booking"><button>Book Now</button></Link>
            </div>
        </div>
        <div className="card">
            <img src="../image/r3.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 2000/- </p>
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r4.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 5000/- </p>
                 
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r5.png" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 4000/- </p>
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r6.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 4000/- </p>
                 
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r7.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 6000/- </p>
                 
                <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>
        <div className="card">
            <img src="../image/r8.jpg" alt="nature"/>
            <div className="card-content">
                <h3>SUPORIOR ROOM</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>Price : Rs 4500/- </p>
                 
                 <Link to="/booking"><button>Book Now</button></Link>
            </div>

        </div>

        </div>
    </main>
    <Footer />    
    
</div>
  )
}

export default Room