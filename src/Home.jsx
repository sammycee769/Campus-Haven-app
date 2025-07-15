import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiMessageCircle, FiPhone } from 'react-icons/fi';
// import { FaRegHeart } from 'react-icons/fa';
import { BiHomeAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
// import { FiMessageCircle } from 'react-icons/fi';
import { FaUserCircle,FaHeart } from 'react-icons/fa';

import { MdLocationOn } from 'react-icons/md';
// import { BiHomeAlt } from 'react-icons/bi';
import img1 from './assets/unsplash_8e679XbGGy4.png';
import img2 from './assets/unsplash_Faa_P3eaaGo.png';
import img3 from './assets/unsplash_GWdZpXUPMs0.png';
import img4 from './assets/unsplash_HxRvdKHVAYY.png';
import img5 from './assets/unsplash_MPFy7Lod_gc.png';
import img6 from './assets/unsplash_RUvW1KGD9a4.png';
import img7 from './assets/unsplash_tHkJAMcO3QE.png';
import img8 from './assets/unsplash_umAXneH4GhA.png';


const recentListings = [
  { id: 1, title: '1 Bedroom apartment with en-suite bathrooms', price: '350,000', location: 'Alapomeji, Yaba', image: img1 },
  { id: 2, title: '2 Bedroom apartment with en-suite bathrooms', price: '650,000', location: 'Alapomeji, Yaba', image: img2 },
];

const extraListings = [
  { id: 3, title: 'Studio apartment with kitchen', price: '300,000', location: 'Amalete, Alimosho', image: img3 },
  { id: 9, title: 'Studio apartment with kitchen and toilet', price: '500,000', location: 'Semete, Ikorodu', image: img5 },
  { id: 10, title: 'Studio apartment ', price: '200,000', location: 'Oloyi, Ikate', image: img8 },
  { id: 11, title: '1 Bedroom Apartment', price: '300,000', location: 'Allen, Ikeja', image: img7 },
  { id: 12, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img6 },
];

const featuredListings = [
  {
    id: 4, title: 'Miniflat', price: '550,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: true, listed: 'Yesterday', image: img4, user: 'Mr Raji Adegoke'
  },
  {
    id: 5, title: 'Flat', price: '750,000/year', location: 'Ajao, Ikoyi', beds: 2, baths: 3,
    verified: false, listed: '3 days ago', image: img5, user: 'Mr Raymond Adesalami'
  },
  {
    id: 6, title: 'Duplex', price: '1,050,000/year', location: 'bambrose, Lagos Island', beds: 3, baths: 2,
    verified: true, listed: 'Just now', image: img6, user: 'Mr John Doee'
  },
  {
    id: 7, title: 'Bungalow', price: '450,000/year', location: 'Itire, Surulere', beds: 1, baths: 2,
    verified: true, listed: '2 days ago', image: img7, user: 'Mr Lawal Okoro'
  },
  {
    id: 8, title: 'Flat', price: '650,000/year', location: 'Alapere, Ikorodu', beds: 2, baths: 1,
    verified: true, listed: '4 days ago', image: img8, user: 'Ms Halimat Abdul'
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ beds: '', baths: '' }); 
  const [showFilters, setShowFilters] = useState(false);

  const handleListingClick = (item) => {
    navigate(`/listing/${item.id}`, { state: item });
  };

  return (
    <div className="p-4 pb-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="flex items-center text-blue-600"><MdLocationOn className="mr-1" /> Surulere, Yaba</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border px-2 py-1 rounded-lg mb-4">
        <FiSearch className="mr-2" />
        <input 
      placeholder="Search by title or location"
      className="w-full outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}/>
      <div className="relative">
  <button
    className="ml-2 text-blue-600"
    onClick={() => setShowFilters(prev => !prev)}
  >
    <FiFilter />
  </button>

  {showFilters && (
    <div className="absolute right-0 mt-2 bg-white border rounded p-2 shadow z-10">
      <div className="mb-2">
        <label className="text-xs block">Beds</label>
        <input type="number" min="0" value={filter.beds} onChange={e => setFilter({...filter, beds: e.target.value})} className="border rounded px-2 py-1 w-24 text-sm" />
      </div>
      <div>
        <label className="text-xs block">Baths</label>
        <input type="number" min="0" value={filter.baths} onChange={e => setFilter({...filter, baths: e.target.value})} className="border rounded px-2 py-1 w-24 text-sm" />
      </div>
    </div>
  )}
</div>

      </div>

      {/* Description */}
      <h2 className="text-lg font-semibold mb-1">Rent Your Dream Hostel</h2>
      <p className="text-sm text-gray-600 mb-4">Easily connect with Landlords/Agents in your preferred location</p>

      {/* Recents */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Recents</h3>
        <button onClick={() => setShowMore(prev => !prev)} className="text-sm text-orange-500">
          {showMore ? 'See less' : 'See more'}
        </button>
      </div>
      <div className="overflow-x-auto flex gap-4 scroll-smooth pb-2">
        {[...recentListings, ...(showMore ? extraListings : [])].map(item => (
          <div key={item.id} onClick={() => handleListingClick(item)} className="min-w-[200px] border rounded p-2 flex-shrink-0 bg-white shadow cursor-pointer">
            <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded mb-1" />
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-blue-600 font-bold">N {item.price}</p>
            <p className="text-xs text-gray-600">{item.location}</p>
          </div>
        ))}
      </div>

      {/* Featured */}
      <h3 className="font-semibold mb-2 mt-6">Featured</h3>
      <div className="space-y-6">
       {featuredListings
  .filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter(item =>
    (!filter.beds || item.beds == filter.beds) &&
    (!filter.baths || item.baths == filter.baths)
  )
  .map(item => (
          <div key={item.id} onClick={() => handleListingClick(item)} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-[1.01] cursor-pointer">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-base text-gray-800">{item.title}</h4>
                  <p className="text-blue-600 font-bold text-sm">N {item.price}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${item.verified ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                  {item.verified ? 'Verified' : 'Unverified'}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{item.location}</p>
              <div className="flex gap-4 text-sm text-gray-700">
                <span>🛏 {item.beds} Bed</span>
                <span>🛁 {item.baths} Bath</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-xs text-gray-600">Listed by <span className="font-medium text-gray-800">{item.user}</span></p>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/messages')} className="text-blue-600 hover:text-blue-800"><FiMessageCircle size={18} /></button>
                  <button onClick={() => window.location.href = 'tel:+2348123456789'} className="text-green-600 hover:text-green-800"><FiPhone size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Footer Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white py-2 border-t text-sm">
        <Link to="/home" className="flex flex-col items-center text-orange-500">
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
        <Link to="/profile" className="flex flex-col items-center text-gray-500">
          <FaUserCircle className="text-lg" /> Profile
        </Link>
      </div>
    </div>
  );
}
