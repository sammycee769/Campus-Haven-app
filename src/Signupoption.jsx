import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaEnvelope, FaPhone, FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";



export default function Signupoption() {
  return (
    <>
    <div className='m-4 mb-0'>
        <div className='flex justify-between p-4 pb-0 font-bold font-serif'>
            CampusHaven
            <a href="/login">Login</a>
        </div>
    </div>
    <div className="relative w-full h-screen bg-cover bg-gray-100 bg-center  text-black ">
    <CiMail className='mt-0 text-[350px]' style={{ width:'390px'}}/>
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-6">choose an option to sign Up</h2>

        <button className="flex items-center justify-center gap-2 w-full border border-black py-3 mb-4 rounded-md text-black hover:bg-white">
          <FaEnvelope />
          Sign Up with your email
        </button>

        <button className="flex items-center justify-center gap-2 w-full border border-black py-3 mb-6 rounded-md text-black hover:bg-white">
          <FaPhone />
          Sign Up with your phone number
        </button>

        <div className="flex items-center justify-center gap-4 mb-6 text-gray-600">
          <hr className="flex-grow border-gray-500" />
          <span>or</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 mb-4 rounded-md hover:bg-gray-800">
          <FaApple />
          Sign up with Apple
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 mb-4 rounded-md hover:bg-gray-800">
          <FaFacebookF />
          Sign up with Facebook
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 mb-6 rounded-md hover:bg-gray-800">
          <FaGoogle />
          Sign up with Google
        </button>

        <p className="text-black text-sm">
          Are you a <span className="font-semibold">LANDLORD/AGENT ?</span>{" "}
          <span className="text-black font-semibold underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
    </div>
    
    </>
  )
}
