import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiMessageCircle } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import {  FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'



export default function ExplorePage() {
  const navigate = useNavigate();
  return (
    
    <div className="flex flex-col justify-between p-6">
      <div>
        <button onClick={() => navigate(-1)} className="text-blue-600 text-left mb-6">← Back</button>
        <FiSearch className="text-5xl  text-center  text-gray-400 mb-4 mx-auto" />
        <h2 className="text-lg  text-center font-semibold mb-1">Nothing to explore yet</h2>
        <p className="text-sm   text-center text-gray-500">Explore listings will appear here when available.</p>
      </div>

<div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white py-2 border-t text-sm">
        <Link to="/home" className="flex flex-col items-center text-gray-500">
          <BiHomeAlt className="text-lg" /> Home
        </Link>
        <Link to="/explore" className="flex flex-col items-center text-orange-500">
          <GoLocation className="text-lg" /> Explore
        </Link>
        <Link to="/favorites" className="flex flex-col items-center text-gray-500">
          <FaHeart className="text-lg" /> Favorite
        </Link>
        <Link to="/messages" className="flex flex-col items-center text-gray-500">
          <FiMessageCircle className="text-lg" /> Messages
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-500">
          <FaUserCircle className="text-lg" /> Profile
        </Link>
      </div>
</div>
  );
}
