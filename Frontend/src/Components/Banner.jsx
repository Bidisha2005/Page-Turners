import React from 'react'
import banner from '../../public/banner.jpg'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 justify-center">
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 '>
       <div className='space-y-12'>
       <h1 className='text-2xl font-bold'>
        <span className='text-pink-500'>Discover the Best, Leave the Rest</span> – A Carefully Selected Library Awaits!!
        </h1>
        <p>
        Welcome to Page-Turners, where future engineers find their survival kits (a.k.a. textbooks)! Whether you're cracking circuits, debugging code, or trying to make sense of thermodynamics, we’ve got the books to help you power through. No more last-minute PDF hunts—get the right textbooks, study smart, and build your way to success. Because in engineering, knowledge is the real blueprint! </p>
        
       </div>
       <button className="btn mt-6 btn-secondary text-xl">Discover Books</button>
        </div>
        <div className='w-full order-1 md:w-1/2'><img src="/banner.jpg" alt="Banner" className='w-100 h-100 '/></div>
        
        
    </div>
    </>
    
  )
}

export default Banner