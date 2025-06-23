import React from 'react'
// import { CiMail } from "react-icons/ci";
import { FaEnvelope, FaPhone, FaApple, FaFacebookF} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import img from './assets/onboardings.png'
import { Link } from 'react-router-dom'

export default function Signupoption() {
  return (
    <>
    <div className='m-4 mb-0'>
        <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
            CampusHaven
            <Link to='/login'>Login</Link>
        </div>
        <hr class="border-t border-gray-600"/>
    </div>
    {/* <div className="relative w-full h-screen bg-cover bg-gray-100 bg-center  text-black "> */}
    <div className="min-h-screen flex items-center justify-center ">
    <div className=" p-6 rounded-lg shadow-md w-full max-w-md text-center">
    <img
    src={img}
    alt="slide"
    className="w-3/3 p-4 max-w-md object-contain"
  />
   
        <h2 className="text-xl font-semibold mb-6">Choose an option to sign Up</h2>

        <button className="flex items-center justify-center gap-2 w-full border border-blue-500 py-3 mb-4 rounded-md text-black h hover:bg-gray-300">
          <FaEnvelope className="text-blue-600"/>
          <Link to="/create_account">Sign Up with your email</Link>
        </button>
{/* 
        <button className="flex items-center justify-center gap-2 w-full border border-black py-3 mb-6 rounded-md text-black hover:bg-white">
          <FaPhone />
          <a href='/create_phoneaccount'> Sign Up with your phone number</a>
        </button> */}

        <div className="flex items-center justify-center gap-4 mb-6 text-gray-600">
          <hr className="flex-grow border-gray-500" />
          <span>or</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-white text-black  border border-gray-600 py-3 mb-4 rounded-md hover:bg-gray-300">
          <FaApple />
          Sign up with Apple
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-white text-black  border border-gray-600 py-3 mb-4 rounded-md hover:bg-gray-300">
          <FaFacebookF className="text-blue-800"/>
          Sign up with Facebook
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-white text-black border border-gray-600 py-3 mb-6 rounded-md hover:bg-gray-300">
          <FcGoogle />
          Sign up with Google
        </button>

        <p className="text-black text-sm">
          Are you a <span className="font-semibold">LANDLORD/AGENT ?</span>{" "}
          <span className="text-orange-500 font-semibold cursor-pointer"> <Link to="/landlordsignup">Sign Up</Link>
          </span>
        </p>
      </div>
    {/* </div> */}
    </div>
    
    </>
  )
}
