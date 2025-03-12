import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import Course from '../Components/Course.jsx';
function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/></div>
    
    <Footer/>
    </>
  )
}

export default Courses