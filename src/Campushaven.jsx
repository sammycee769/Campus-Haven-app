import React from 'react'
import bg from './assets/bag1.jpg'
import { Link } from 'react-router-dom'
export default function Campushaven() {
  return (
    <>
    <div className="h-screen w-full bg-cover bg-center relative"
    style={{backgroundImage:`url(${bg})`}}>
      <div className="absolute top-8 w-full flex justify-center">
        <h1 className="bg-white text-blue-500 text-xl font-bold px-4 py-2 rounded">CampusHaven</h1>
       </div>
       <div className="absolute inset-0 flex items-end justify-center pb-32 gap-10 z-10">
  {/* List */}
  <div className="flex flex-col items-center">
    <span className="mb-2 text-yellow-500 bg-white text-m font-medium">List</span>
    <div className="w-2 h-2 rounded-full bg-black mb-1"></div>
    <div className="h-48 w-0.5 bg-black"></div>
  </div>

  {/* Explore */}
  <div className="flex flex-col items-center">
    <span className="mb-2 text-red-600 bg-white text-m font-medium">Explore</span>
    <div className="w-2 h-2 rounded-full bg-black mb-1"></div>
    <div className="h-40 w-0.5 bg-black"></div>
  </div>

  {/* Find */}
  <div className="flex flex-col items-center">
    <span className="mb-2 text-blue-500 bg-white  text-m font-medium">Find</span>
    <div className="w-2 h-2 rounded-full bg-black mb-1"></div>
    <div className="h-32 w-0.5 bg-black"></div>
  </div>
</div>

      {/* Get Started Button */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <Link to='/getstarted'>
        <button className="bg-orange-400 hover:bg-blue-800 text-white px-24 py-3 rounded-md font-semibold shadow-md">
          Get Started
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}
