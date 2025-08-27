import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// import styled from 'styled-components';

export const Contact = () => {
//   const Wrapper = styled.section``;  
  return (
   <>
   <Nav/>
   <div className='rock'>
    <h1>Contact us</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54876.18970981267!2d76.69120756640018!3d30.72509458758978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed85ee87073b%3A0x13ebffa9bcf755c9!2sJW%20Marriott%20Hotel%20Chandigarh!5e0!3m2!1sen!2sin!4v1721151436162!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer/>
  </>
  )
}


export default Contact