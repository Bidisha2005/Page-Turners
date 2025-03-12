import React, {useState, useEffect } from 'react';
import Cards from './Cards';
// import list from '../../public/list.json'
import {Link} from 'react-router-dom'
import axios from "axios";
function Course() {

  const[book,setBook]=useState([])
    useEffect(()=>{
      const getBook=async()=>{
        try {
          const res =await axios.get("http://localhost:3001/book");
          console.log(res.data)
          setBook(res.data)

        } catch (error) {
          console.log(error)
        }
       
      }
      getBook();
    },[])
  return (
   <><div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28  items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>Welcome to Exclusive Books –   <span className='text-pink-500'>Engineering Edition! </span>⚙️📚</h1>
      <p className='mt-12'>
      Here, knowledge meets innovation! Whether you're a student, a professional, or just passionate about engineering, you'll find the best books to fuel your curiosity and sharpen your skills.

Explore groundbreaking theories, practical guides, and the latest advancements in engineering. Your next great discovery starts here! 🚀🔧📖
     </p>
     
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {book.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))}
     </div>
     <Link to='/'>
     <button className='mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 duration-500 mb-7'>Back</button>
     </Link>
     </div>
      </div></>
  )
}

export default Course