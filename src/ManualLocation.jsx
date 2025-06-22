import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiArrowLeft } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ManualLocation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 pt-6">
      <button onClick={() => navigate(-1)} className="text-sm underline text-gray-700 mb-4 flex items-center gap-1">
        <FiArrowLeft />
        Go Back
      </button>

      <h2 className="text-center font-semibold text-lg mb-4">Enter Your Location</h2>

      <div className="flex items-center border border-gray-300 rounded px-2 py-2 mb-4">
        <input
          type="text"
          placeholder="Search location"
          className="w-full outline-none text-gray-700"
         
        />
        <FiSearch className="text-gray-500 text-xl" />
      </div>

      <button className="flex items-center text-sm text-blue-600 mb-4">
        <FiMapPin className="mr-1" />
        Use My Location
      </button>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">Search Result</p>
        <div className="flex items-center mb-2 text-gray-700">
          <FaMapMarkerAlt className="text-blue-600 mr-1" />
          Surulere , Yaba
        </div>
        <div className="flex items-center mb-2 text-gray-700">
          <FaMapMarkerAlt className="text-blue-600 mr-1" />
          Surulere
        </div>
      </div>

      <button
        onClick={() => {alert('Location saved!');
        navigate("/showcase");
        }}
        className="bg-orange-500 text-white px-4 py-2 rounded w-full"
      >
        Continue
      </button>
    </div>
  );
}
