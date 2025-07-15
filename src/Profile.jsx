import { Link } from 'react-router-dom';
import { FiBell, FiLogOut } from 'react-icons/fi';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaQuestionCircle, FaHeart } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiMessageCircle } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="text-center py-4 border-b text-lg font-medium">My account</div>

      {/* Profile Info */}
      <div className="flex flex-col items-center bg-blue-100 py-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
          alt="profile"
          className="w-24 h-24 rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">Aderaji John</h2>
        <p className="text-sm text-gray-700">aderajijohn29@gmail.com</p>
      </div>

      {/* Options */}
      <div className="px-4 divide-y">
        <Link to="/notifications" className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <FiBell className="text-xl text-blue-500" /> Notifications
          </div>
        </Link>

        <Link to="/listing-management" className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <MdManageAccounts className="text-xl text-blue-500" /> Listing management
          </div>
        </Link>

        <Link to="/about" className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <HiOutlineInformationCircle className="text-xl text-blue-500" /> About
          </div>
        </Link>

        <Link to="/need-help" className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <FaQuestionCircle className="text-xl text-blue-500" /> Need help?
          </div>
        </Link>

        <button onClick={() => navigate('/login')} className="flex items-center gap-3 py-4 text-red-600 font-medium">
          <FiLogOut className="text-xl" /> Log out
        </button>
      </div>

      {/* Footer Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white py-2 border-t text-sm">
        <Link to="/home" className="flex flex-col items-center text-gray-500">
          <BiHomeAlt className="text-lg" /> Home
        </Link>
        <Link to="/explore" className="flex flex-col items-center text-gray-500">
          <GoLocation className="text-lg" /> Explore
        </Link>
        <Link to="/favorites" className="flex flex-col items-center text-gray-500">
          <FaHeart className="text-lg" /> Favorite
        </Link>
        <Link to="/messages" className="flex flex-col items-center text-gray-500">
          <FiMessageCircle className="text-lg" /> Messages
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-orange-500">
          <FaUserCircle className="text-lg" /> Profile
        </Link>
      </div>
    </div>
  );
}
