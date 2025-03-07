import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar'; // Assuming you have these
import Footer from '../components/Footer';




function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/contact', data); // Replace with your backend URL
      if (response.status === 201) {
        toast.success('Message sent successfully!');
        reset(); // Clear the form
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.data && error.response.data.message){
        toast.error(`Error: ${error.response.data.message}`);
      } else{
        toast.error('An error occurred while sending the message.');
      }

    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen dark:bg-slate-900 dark:text-black">
        <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-3xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         

            <div>
            
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block font-semibold">Year & Branch</label>
              <input
                type="text"
                {...register('yearBranch', { required: 'Year & Branch is required' })}
                className="w-full p-2 border rounded-md"
                placeholder="e.g., 2nd Year, CSE"
              />
              {errors.yearBranch && <p className="text-red-500">{errors.yearBranch.message}</p>}
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block font-semibold">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 border rounded-md"
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
           
          </form>
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default ContactUs;