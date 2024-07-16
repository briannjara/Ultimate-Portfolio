import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
   </>
  )
}

export default App
