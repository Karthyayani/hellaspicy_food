import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Menu from './Components/Menu/Menu'
import Contact from './Components/Contact/Contact'
import Error from './Error'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  )
}
