import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import pic from '../Menu/hella.png'
import menu from '../Menu/menu.jpeg'
import backgroundpic from '../Menu/background.jpeg'
import Footer from '../Footer/Footer'
import './Menu.css'

export default function Menu() {
  return (
    <>
       <Header/>
      <Navbar/>
      <section className='section1'> 

        <h1 className='h1menu text-warning d-inline'>Menu </h1>
        <h3  className='d-inline text-danger h3'>Hellaspicy Food</h3>
      </section>
      <img src={menu} className='menu'/>
     <Footer/>
    </>
  )
}
