import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import './Contact.css'

export default function Contact() {
  return (
    <>
    <Header/>
    <Navbar/>
    <section className='section1'> 

        <h1 className='text-warning d-inline' id="contact">Contact Us </h1>
        <h3 id="h3" className='d-inline text-warning'>Hellaspicy Food</h3>

      </section>
      <div className='row'>
      
        <div className='col-6 mt-4 map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.97300047604!2d79.11113731415888!3d18.439534976461875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd927dbf682ef%3A0xb7b7931e5e847c0e!2sHella%20Spicy%20Food!5e0!3m2!1sen!2sin!4v1668600236306!5m2!1sen!2sin" width="670" height="400"/>
        </div>
        <div className='col-6 '>
          <form action='mailto:karthygolam@gmail.com' method='post' encType='text/plain'>
           <div className='row mt-4'>           
              <input type="text" placeholder='first Name' required className='form-control me-2'/>           
           </div>
           <div className='row mt-4'>            
              <input type="text" placeholder='last Name' required className='form-control'/>          
           </div>
           <div className='row mt-4'>            
              <input type="text" placeholder='email:' required className='form-control'/>          
           </div>
           <div className='row mt-4'>
              <input type="text" placeholder='Phone:' required className='form-control'/>
           </div>
           <div className='row mt-4'>            
              <input type="text" placeholder='Message'  className='form-control ' required/>          
           </div>
           <div className='row mt-5'>
           <input type="submit" value='Send Message' className='form-control btn btn-primary '/>
           </div>
           </form>
        </div>
        
      </div>
        <Footer/>  
    </>
  )
}
