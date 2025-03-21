import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>  {
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("https://page-turners-final.onrender.com/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000)
      }
      
    }).catch((err)=>{
      if(err.response){
      console.log(err)
      toast.error("Error:"+err.response.data.message);
      setTimeout(()=>{},2000);
      }
    })
  };

  return (
    <div className="text-black">
      {/* Modal - Hidden by default, opens only when triggered */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Submit Button (inside the modal) */}
            <div className="mt-4 text-center">
              <button type="submit" className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-300">
                Login
              </button>
            </div>

            {/* Signup Link (Opens modal from another element) */}
            <p className="text-center mt-2">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-400 cursor-pointer">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
