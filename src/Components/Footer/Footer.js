import React from 'react';

import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className='box text-center text-light'>
                <h4 className='pt-2'>Timings:</h4>
                <hr className='pt-4' />
               <div>
                <span className='text-start'>Sat - Sun</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className='text-end'>11:30 AM – 12:00 AM</span>
                <hr/>
                <span className='text-start'>Mon - Fri</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className='text-end'>12:30 PM – 11:00 PM</span>
               </div>
            </div>
            
            <div className='footer'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-sm-6  col-6 text-light text-center'>
                        <h3 className='mt-4'>Address</h3>
                        <p> H.No:7-1-754/3<br /> Near VASARA HOSPITAL <br /> BESIDE ANU, DOORS <br /> MANKAMMATHOTA <br /> KARIMNAGAR 505001</p>
                        <a href='/contact'>View Map</a>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-6 col-6 text-light text-center'>
                        <h3 className='mt-4'> Contact Us! </h3>
                        <p>Email:</p> <h3>helaspicyfood@gmail.com</h3>
                        <p>Contact:</p> <h3>7093940365</h3>
                    </div>
                </div>
                <div className='row bg-dark text-light '>
                      <h6  className='text-center'>2022 &copy; Helaspicyfood.Designed by Karthyayani</h6>  
                </div>
            </div>
        </>
    )
}
