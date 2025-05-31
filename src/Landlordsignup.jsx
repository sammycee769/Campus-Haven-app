import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import StepIndicator from "./StepIndicator.jsx"

export default function Step1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validLength = form.password.length >= 8;
  const hasUppercaseAndNumber = /(?=.*[A-Z])(?=.*\d)/.test(form.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(form.password);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    let isValid = true;

    // Password strength validation
    if (!validLength || !hasUppercaseAndNumber || !hasSpecialChar) {
      setPasswordError("Password does not meet strength requirements.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm password match
    if (form.password !== form.confirmPassword) {
      setConfirmError("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmError("");
    }

    if (isValid) {
      navigate("/verifyemail"); 
    }
  };

  return (
    <>
    <StepIndicator />
     <div className='m-4 mb-0'>
           <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
               CampusHaven
           </div>
           <hr class="border-t border-gray-600"/>
       </div>
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create your account as a LANDLORD/AGENT</h2>
        <div className="space-y-4">
        <label className="block mt-4 font-semibold">Firstname</label>
          <input
            name="firstName"
            placeholder="Input your first name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
         <label className="block mt-4 font-semibold">Lastname</label>
          <input
            name="lastName"
            placeholder="Input your last name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <label className="block mt-4 font-semibold">Email Address</label>
          <input
            name="email"
            placeholder="example@gmail.com"
            type="email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />

          {/* Password */}
          <label className="block mt-4 font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded pr-10"
              value={form.password}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <ul className="text-sm text-gray-700 mt-2">
            <li className={validLength ? "text-green-600" : "text-gray-500"}>
              Minimum of 8 characters
            </li>
            <li className={hasUppercaseAndNumber ? "text-green-600" : "text-gray-500"}>
              At least one uppercase letter and one number
            </li>
            <li className={hasSpecialChar ? "text-green-600" : "text-gray-500"}>
              A special character (e.g. !, @, #)
            </li>
          </ul>
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

          {/* Confirm Password */}
          <label className="block mt-4 font-semibold">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded pr-10"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {confirmError && <p className="text-red-500 text-sm mt-1">{confirmError}</p>}

          <button
            className="w-full bg-orange-500 text-white p-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
