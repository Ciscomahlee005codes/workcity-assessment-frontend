import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import "./HomePage.css"
import Hero from '../../Components/Hero/Hero'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Services from '../../Components/Services/Services'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'


const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <AboutUs />
        <Services />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default HomePage