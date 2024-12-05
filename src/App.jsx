import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Qualification from './components/Qualification.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AOS from 'aos'
import "aos/dist/aos.css";





const App = () => {

  useEffect(()=>{

    AOS.init({duration:1000,once:true});

  },[])
  return (
    <>
    <main className=''>
    <Navbar/>
    <Hero/>
   <Skills/>
   <Qualification/>
   <Projects/>
   <Contact/>
   <Footer/>

    </main>
      </>
  )
}

export default App