import React from 'react'


import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import pic from '../Home/food1.jpg'
import pic1 from '../Home/food2.jpg'
import pic2 from '../Home/food4.jpg'
import img1 from '../Home/1.jpg'
import img2 from '../Home/2.jpg'
import img3 from '../Home/3.jpg'
import Footer from '../Footer/Footer'
import './Home.css'


export default function Home() {
  return (
    <>
         <Header/>
         <Navbar/>
         <section>
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic} className="d-block img1"alt="logo"/>
    </div>
    <div class="carousel-item">
      <img src={pic1} className="d-block img1" alt="logo"/>
    </div>
    <div class="carousel-item">
      <img src={pic2} className="d-block img1"  alt="logo"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         </section>
         
         <section>
		<div class="container mt-4">
			<div class="row">
               <div class="col-md-6 col-sm-12 col-lg-12 text-center">
				
				<div className="subtitle"><h6>WELCOME TO</h6></div>
				<h3>HellaspicyFood</h3>
				<p>For the first time in Karimnagar  delicacies under one roof !!</p>
				<p>Helaspicyfood on H.No:7-1-754/3 Near VASARA HOSPITAL ,MANKAMMATHOTA KARIMANAGAR aims to bring you <br/>the culinary & traditional legacies of  Telangana  to your palate with amazing drinks.</p>
				<p>We aim to serve the original flavourful delicacies with authentic spices & ingredients straight from <br/>the Telugu heartland. For those who are in the mood to relish delicious local Telugu cuisine with an uptown <br/>traditional ambience, this will be their favourite go-to restaurant.

				</p>
				<p>While you feast on our flavourful delicacies, you can club it with delicious drinks of your choice.</p>
			   </div>
			</div>
		</div>
	</section>
  <section >
		<div className="container">
			<div className="row">
				<div className="col-4 text-center">
					<img src={img1} height="200px" width="350px"/>
					<h4>Start eating better
					</h4>
                    <a href="/*" class="btn btn-primary btn-lg">order now</a>


	
				</div>
				<div className="col-4 text-center">
					<img src={img2} height="200px" width="350px"/>
					<h4>Start eating better
					</h4>
					<a href="/*" className="btn btn-primary btn-lg">order now</a>

				</div>
				<div className="col-4 text-center">
					<img src={img3} height="200px" width="350px"/>
					<h4>Start eating better
					</h4>
					<a href='/*' className="btn btn-primary btn-lg ">order now</a>

				</div>
			</div>
		</div>
	  </section>
   <Footer/>
    </>
    
  )
}
