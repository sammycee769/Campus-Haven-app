import React, { useRef } from "react";

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
            <div className='flex justify-between p-4 pb-0 font-bold font-serif'>
                CampusHaven
            </div>
    </div>
    <div className="min-h-screen bg-gray-200 ">
      <div className=" w-full max-w-md p-6 ">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Verify your phone number</h1>
        <p className="mb-4 text-gray-700">
          Enter the 6 digit verification code sent to your phone number 
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
  <button className="`mt-6 w-full p-3 text-white bg-black hover:bg-gray-500  rounded ">
    <a href="">Verify</a>
  </button>
  </div>
  <p className="pl-8"> Not your number? <a href="/create_phoneaccount">edit to receive code</a></p>
  </div>
  </div>
    </>
  )
}
