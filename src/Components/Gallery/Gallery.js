import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import pic1 from '../Gallery/images/one.jpg'
import pic2 from '../Gallery/images/two.jpg'
import pic3 from '../Gallery/images/four.jpg'
import pic4 from '../Gallery/images/five.jpg'
import pic5 from '../Gallery/images/six.jpg'
import pic6 from '../Gallery/images/seven.jpg'
import pic7 from '../Gallery/images/eight.jpg'
import pic8 from '../Gallery/images/nine.jpeg'
import pic9 from '../Gallery/images/ten.webp'
import pic10 from '../Gallery/images/eleven.webp'
import pic11 from '../Gallery/images/12.jpg'
import pic12 from '../Gallery/images/13.jpg'
import pic13 from '../Gallery/images/14.jpg'
import pic14 from '../Gallery/images/15.webp'
import pic15 from '../Gallery/images/16.webp'
import pic16 from'../Gallery/images/17.webp'
import pic17 from '../Gallery/images/18.webp'
import pic18 from '../Gallery/images/19.jpg'
import pic19 from '../Gallery/images/20.jpg'
import pic20 from '../Gallery/images/21.jpg'
import pic21 from '../Gallery/images/22.jpg'
import pic22 from '../Gallery/images/23.jpg'
import pic23 from '../Gallery/images/25.png'
import './Gallery.css'
import Footer from '../Footer/Footer'
export default function Gallery() {
  return (
    <>
       <Header/>
      <Navbar/>
      <section className='section1'> 

        <h1 className='h1menu text-warning'>Gallery </h1>
        <h3  className='d-inline text-danger h3'>Hellaspicy Food</h3>
      </section>
      <div className="row text-center m-4">
        <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
        <img src={pic1}  alt="logo" className=' pic1 '/>
        </div>
        <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
        <img src={pic2}  alt="logo" className='pic2'/>
        </div>

        <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
        <img src={pic3}  alt="logo" className='pic2 '/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic4} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic5} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic6} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic7} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic18} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic9} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic10} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic11} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic12} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic13} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic14} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic15} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic16} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic17} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic8} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic19} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic5} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic20} alt="logo" className='pic2'/>
        </div>
      </div>
      <div className='row text-center m-4'>
        <div className='col-4'>
          <img  src={pic21} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic22} alt="logo" className='pic2'/>
        </div>
        <div className='col-4'>
          <img  src={pic23} alt="logo" className='pic2'/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
