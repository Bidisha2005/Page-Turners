import React from 'react'
import Home from './home/Home.jsx';
import Signup from './components/Signup.jsx';
import toast, { Toaster } from 'react-hot-toast';
import {Navigate,Route, Routes} from "react-router-dom"
import Courses from './courses/Courses.jsx';
import Contact from './Contact/Contact.jsx';
import About from './About/About.jsx'

import Faqs from './Faqs/Faqs.jsx'
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>

      
      <Route
            path="/exclusive"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
    
  )
}

export default App