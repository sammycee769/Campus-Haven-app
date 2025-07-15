import { useLocation, useNavigate } from 'react-router-dom';
import { FiMessageCircle, FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

export default function ListingDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;

  if (!item) {
    return (
      <div className="p-4">
        <p>No listing found.</p>
        <button onClick={() => navigate('/home')} className="mt-2 text-blue-600 underline">Go Home</button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600">← Back</button>

      <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-lg mb-4" />

      <h1 className="text-xl font-semibold mb-1">{item.title}</h1>
      <p className="text-blue-600 font-bold text-lg mb-1">₦ {item.price}</p>
      <p className="flex items-center text-gray-600 text-sm mb-2">
        <MdLocationOn className="mr-1" /> {item.location}
      </p>

      <div className="flex space-x-4 text-sm mb-4">
        <span>🛏 {item.beds} Bed</span>
        <span>🛁 {item.baths} Bath</span>
      </div>

      <div className="text-sm mb-1">Listed by: <strong>{item.user}</strong></div>
      <div className="text-sm mb-4">
        {item.verified ? (
          <span className="text-green-600">✅ Verified</span>
        ) : (
          <span className="text-red-500">❌ Unverified</span>
        )}
      </div>

      <div className="flex space-x-4">
        <button onClick={() => navigate('/messages')} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <FiMessageCircle className="mr-2" /> Message
        </button>
        <button onClick={() => window.location.href = 'tel:+2348123456789'} className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
          <FiPhone className="mr-2" /> Call
        </button>
      </div>
    </div>
  );
}
