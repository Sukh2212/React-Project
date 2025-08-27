import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'



function About() {
  return (
    <div>
      

    <Nav />
    <main>
   
<section id="about-info" className="bg-light py-3">
  <div className="container">
    <div className="info-left">
      <h1 className="l-heading"><span className="text-primary">
        About</span> The Booking Buddy </h1>
        <p>Welcome to The Booking Buddy, where luxury meets 
        comfort and every stay is an unforgettable experience. 
        our hotel offers a perfect blend of modern amenities 
        and classic charm.

            </p>
          <p>Discover our meticulously designed rooms and 
            suites, each offering  stunning views,
             plush bedding, high-tech amenities,
             etc. Whether you're here for business or leisure,
              our attentive staff is dedicated to ensuring your 
              every need is met with a smile.

          </p>
    </div>
    <div className="info-right">
      <img src="./image/h6.jpg" alt="hotel"/>
    </div>
  </div>
</section>
<div className="clr"></div>

<section id="testimonials" className="py-3">
  <div className="container">
    <h2 className="l-heading">What Our Guests Say</h2>
    <div className="testimonial bg-primary">
      <img src="../image/w5.jpg" alt="Samantha"/>
      <p>A hidden gem in the heart of the city!
         The rooms are spacious and elegantly
         decorated, with breathtaking views 
         of the skyline. The staff went above
         and beyond to ensure our stay was 
         perfect. Can't wait to return!"
         The dining experience was superb,
         and the staff were friendly and accommodating.

      </p>
      </div>
      </div>
    <div className="testimonial bg-primary">
      <img src="../image/w4.jpg" alt="Rubina"/>
      <p>An oasis of tranquility! Despite
        being centrally located, the hotel feels
        like a peaceful retreat. The amenities,
        from the spa to the fitness center, are 
        top-notch. Our room was a sanctuary with 
        luxurious amenities and a serene atmosphere.
         Can't praise this place enough

      </p>
      </div>
</section>
    </main>
    <Footer />    
    
        </div>
  )
}

export default About