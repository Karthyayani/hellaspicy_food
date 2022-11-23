import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import picfirst from'../About/Images/1.png'
import picsecond from '../About/Images/2.png'
import picthird from '../About/Images/3.png'
import Footer from '../Footer/Footer'
export default function About() {
  return (
    <>
      <Header/>
      <Navbar/>


     {/*About title start*/}
      <section className='section1'> 

        <h1 className='h1menu text-warning d-inline'>About </h1>
        <h3  className='d-inline text-danger h3'>Hellaspicy Food</h3>
      </section>
     {/* About tite end */}
      {/* About Discription start */}
      <section>
		<div class="container mt-4">
			<div class="row">
               <div class="col-md-6 col-sm-12 col-lg-12 text-center">
				
				<div class="subtitle"><h6>WELCOME TO</h6></div>
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
  <section>
		<div class="container mt-5">
			<div class="row">
				<div class="col-4 text-center">
                 <img src={picfirst}/>
				 <div>
					<h3>Daily Fresh Menus</h3>
					<p>Helaspicyfoodhelp you treat yourself with a different meal everyday, thanks to our menus and our awesome creative chefs!</p>
				 </div>
				</div>
				<div class="col-4 text-center">
					<img src={picsecond}/>
					<div>
						<h3>Fresh Ingredient</h3>
						<p>When cooking with fresh ingredients, your food can retain a lot more nutrients compared to processed foods.

						</p>
					 </div>
				</div>
				<div class="col-4 text-center">
 <img src={picthird}class="text-primary"/>
<div >
	<h3>Tasty Meals</h3>
	<p>Hellaspicyfood creative chefs use fresh and seasonal ingredients to make affordable, tasty and nourishing meals.</p>
</div>


				</div>
			</div>
		</div>
	</section>
	{/* About Discription End */}
	<Footer/>
    </>
  )
}
