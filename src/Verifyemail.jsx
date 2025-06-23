import React, { useRef } from "react";
import { Link } from 'react-router-dom'

export default function Verifyphone() {
    const inputsRef = useRef([]);

const handleChange = (e, index) => {
  const value = e.target.value;
  if (/^\d$/.test(value)) {
    if (index < 5) {
      inputsRef.current[index + 1].focus();
    }
  }
};

const handleKeyDown = (e, index) => {
  if (e.key === "Backspace" && !e.target.value && index > 0) {
    inputsRef.current[index - 1].focus();
  }
};

return (
    <>
 <div className='m-4 mb-0'>
            <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
               CampusHaven
            </div>
            <hr class="border-t border-gray-600"/>
    </div>
    <div className="min-h-screen  ">
      <div className=" w-full max-w-md p-6 ">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Verify your email address</h1>
        <p className="mb-4 text-gray-700">
          Enter the 6 digit verification code sent to your email address 
        </p>
  <div className="flex space-x-2 mb-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        className="w-12 h-12 text-center border rounded bg-gray-300"
        onChange={(e) => handleChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        ref={(el) => (inputsRef.current[index] = el)}
      />
    ))}
  </div>
  <p className="">Didn't receive code?</p>
  <div className="mt-36 mb-4">
  <button className="`mt-6 w-full p-3 text-white bg-orange-400  hover:bg-black rounded ">
    <Link to="">Verify</Link>
  </button>
  </div>
  <p className="pl-8 "> Not your email? <Link to="/create_account">Edit to receive code</Link></p>
  </div>
  </div>
    </>
  )
}
