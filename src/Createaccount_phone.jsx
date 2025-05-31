import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEyeSlash,
  FaEye,
  FaApple,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";

export default function Createaccount_phone() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreementError, setAgreementError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const validLength = password.length >= 8;
  const hasUppercaseAndNumber = /(?=.*[A-Z])(?=.*\d)/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword;
  const isValidPhone = /^0(70|80|81|90|91)\d{8}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!isValidPhone) {
      setPhoneError("Invalid phone number");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (!validLength || !hasUppercaseAndNumber || !hasSpecialChar) {
      setPasswordError("Password does not meet strength requirements");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!passwordsMatch) {
      setConfirmError("Passwords do not match");
      valid = false;
    } else {
      setConfirmError("");
    }

    if (!agreed) {
      setAgreementError("You must agree to continue");
      valid = false;
    } else {
      setAgreementError("");
    }

    if (valid) {
      navigate("/verify_phone");
    }
  };

  return (
    <>
     <div className='m-4 mb-0'>
            <div className='flex justify-between p-4 pb-0 font-bold font-serif'>
                CampusHaven
            </div>
    </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-100 rounded"
      >
        <h2 className="text-2xl font-semibold mb-4">Create your account</h2>

        <label className="block font-semibold">Phone Number</label>
        <div className="flex space-x-2 mb-1">
          <input
            type="text"
            value="+234"
            disabled
            className="w-20 bg-gray-200 p-2 rounded border"
          />
          <input
            type="tel"
            placeholder="080********"
            className="flex-1 p-2 rounded border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {phoneError && (
          <p className="text-red-500 text-sm mb-2">{phoneError}</p>
        )}

        <label className="block mt-4 font-semibold">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-2 border rounded pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEye />  : <FaEyeSlash />}
          </span>
        </div>

        <ul className="text-sm text-gray-700 mt-2">
          <li className={validLength ? "text-green-600" : "text-gray-500"}>
            Minimum of 8 characters
          </li>
          <li
            className={
              hasUppercaseAndNumber ? "text-green-600" : "text-gray-500"
            }
          >
            At least one uppercase letter and one number
          </li>
          <li className={hasSpecialChar ? "text-green-600" : "text-gray-500"}>
            A special character (e.g. !, @, #)
          </li>
        </ul>   
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}

        <label className="block mt-4 font-semibold">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="w-full p-2 border rounded pr-10"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {confirmError && (
          <p className="text-red-500 text-sm mt-1">{confirmError}</p>
        )}

        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <span>
              I agree to the{" "}
              <span className="font-semibold">Terms of Service</span> and{" "}
              <span className="font-semibold">Privacy Policy</span>
            </span>
          </label>
          {agreementError && (
            <p className="text-red-500 text-sm mt-1">{agreementError}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 w-full p-3 text-white bg-black hover:bg-gray-500 rounded"
        >
          Next
        </button>
        <div className="flex items-center justify-center gap-4 text-gray-600 mb-4">
          <hr className="flex-grow border-gray-500" />
          <span>or</span>
          <hr className="flex-grow border-gray-500" />
        </div>

        {/* Social Signup Buttons */}
        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 mb-3 rounded-md hover:bg-gray-800">
          <FaApple /> Sign up with Apple
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 mb-3 rounded-md hover:bg-gray-800">
          <FaFacebookF /> Sign up with Facebook
        </button>
        <button className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
          <FaGoogle /> Sign up with Google
        </button>

        <p className="text-black text-sm text-center mt-6">
          Are you a <span className="font-semibold">LANDLORD/AGENT ?</span>{" "}
          <span className="font-semibold underline cursor-pointer">
          <a href="/landlordsignup">Sign Up</a>
          </span>
        </p>
      </form>
    </>
  );
}
