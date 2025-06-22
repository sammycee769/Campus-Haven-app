import { FiSearch, FiX, FiHome } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import unsplash from "./assets/unsplash_8e679XbGGy4.png";

export default function PropertyShowcase() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center text-center">
      {/* Logo */}
      <h1 className="text-blue-500 font-bold text-lg mb-4 self-start">CampusHaven</h1>

      {/* Header */}
      <div className="max-w-md w-full flex flex-col items-center">
        <h2 className="text-orange-500 font-semibold text-xl mb-1">
          Showcase your property to the right tenants
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Set your price, add photos, and connect with verified renters—all in one secure platform.
        </p>

        {/* Dummy Search */}
        <div className="flex items-center gap-2 border rounded-full px-3 py-2 mb-6 shadow-sm w-full justify-center">
          <FiSearch className="text-gray-500 text-xl" />
          <span className="text-sm text-gray-700">Search</span>
          <div className="w-px bg-gray-300 h-4 mx-2"></div>
          <span className="text-sm text-gray-700">Lagos</span>
          <div className="w-px bg-gray-300 h-4 mx-2"></div>
          <span className="text-sm text-gray-700">2 bedrooms</span>
          <FiX className="ml-auto text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Setup Section */}
      <h3 className="font-semibold text-lg mb-2 self-start">CampusHaven is easy to setup</h3>
      <img
        src={unsplash}
        alt="Sample Apartment"
        className="rounded-md w-full h-auto object-cover mb-4"
      />

      <p className="text-gray-700 font-medium mb-3 self-start">Share Key Property Details:</p>

      <button
      onClick={() =>navigate('/postproperty') }
       className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-2 rounded-md text-sm">
        List Your Property <FiHome />
      </button>
    </div>
  );
}
