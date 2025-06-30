import { React,useState } from "react";
import { FaEyeSlash, FaEye, FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const handleClick = (e) => {
    e.preventDefault(); 
    alert("Login Successfully!");
    navigate("/home");
  };
  

  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <>
    <div className='m-4 mb-0'>
                <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
                   CampusHaven
                </div>
                <hr className="border-t border-gray-600"/>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-md p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Log in to your account</h1>
            <p className="mb-4 text-gray-700">
              Don't have an account ? <span className="font-semibold text-orange-400 cursor-pointer"><Link to="/create_account">Sign Up</Link></span>
            </p>
    
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
             
              placeholder="example@gmail.com"
              required
              className="w-full px-3 py-2 rounded-md border outline-none mb-4"
            />
    
            <label className="block font-semibold mb-1">Password</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md border pr-10"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              >
                {showPassword ?  <FaEye />:  <FaEyeSlash />}
              </span>
            </div>
            <div className="mt-3 mb-4 text-sm">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <span>
              I agree to the <span className="font-semibold">Terms of Service</span> and{" "}
              <span className="font-semibold">Privacy Policy</span>
            </span>
          </label>
        </div>
        <span className="text-gray-800"> <Link to="/forgotpassword">Forgot password?</Link></span>
        <button
        onClick={handleClick} type="submit"
          className={"w-full mt-2 py-3 text-white rounded-md mb-4 bg-orange-400  hover:bg-gray-800" }
        >
          Login
        </button>

        <div className="flex items-center justify-center gap-4 text-gray-600 mb-4">
          <hr className="flex-grow border-gray-500" />
          <span>or</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Social Signup Buttons */}
        <button className="flex items-center justify-center gap-2 w-full bg-white text-black  border border-gray-600 py-3 mb-3 rounded-md hover:bg-gray-300">
          <FaApple /> Sign up with Apple
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-white text-black  border border-gray-600 py-3 mb-3 rounded-md hover:bg-gray-300">
          <FaFacebookF className="text-blue-800"/> Sign up with Facebook
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-white text-black  border border-gray-600 py-3 rounded-md hover:bg-gray-300">
          <FcGoogle /> Sign up with Google
        </button>

        <p className="text-black text-sm text-center mt-6">
          Are you a <span className="font-semibold">LANDLORD/AGENT ?</span>{" "}
          <span className="text-orange-500 font-semibold cursor-pointer"> <Link to="/landlordsignup">Sign Up</Link></span>
        </p>
      </div>
    </div>
    </>
  );
};
