import { useState } from 'react';
import { FiSearch, FiFilter, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';
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
  { id: 3, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img3 },
  { id: 9, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img5 },
  { id: 10, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img8 },
  { id: 11, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img7 },
  { id: 12, title: 'Studio apartment with kitchen', price: '300,000', location: 'Akoka, Yaba', image: img6 },
];

const featuredListings = [
  {
    id: 4, title: 'Miniflat', price: '650,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: true, listed: '3 days ago', image: img4, user: 'Mr Raji Adegoke'
  },
  {
    id: 5, title: 'Miniflat', price: '650,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: false, listed: '3 days ago', image: img5, user: 'Mr Raji Adegoke'
  },
  {
    id: 6, title: 'Miniflat', price: '650,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: true, listed: '3 days ago', image: img6, user: 'Mr Raji Adegoke'
  },
  {
    id: 7, title: 'Miniflat', price: '650,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: true, listed: '3 days ago', image: img7, user: 'Mr Raji Adegoke'
  },
  {
    id: 8, title: 'Miniflat', price: '650,000/year', location: 'Alapomeji, Yaba', beds: 1, baths: 1,
    verified: true, listed: '3 days ago', image: img8, user: 'Mr Raji Adegoke'
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(prev => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          document.getElementById("recent-scroll")?.scrollTo({
            left: 9999,
            behavior: "smooth"
          });
        }, 100);
      }
      return next;
    });
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
        <input placeholder="Search" className="w-full outline-none" />
        <button className="ml-2 text-blue-600"><FiFilter /></button>
      </div>

      {/* Description */}
      <h2 className="text-lg font-semibold mb-1">Rent Your Dream Hostel</h2>
      <p className="text-sm text-gray-600 mb-4">Easily connect with Landlords/Agents in your preferred location</p>

        {/* Recents */}
        <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Recents</h3>
        <button onClick={toggleShowMore} className="text-sm text-orange-500">
          {showMore ? 'See less' : 'See more'}
        </button>
      </div>

      <div id="recent-scroll" className="overflow-x-auto flex gap-4 scroll-smooth pb-2">
        {[...recentListings, ...(showMore ? extraListings : [])].map(item => (
          <div
            key={item.id}
            className="min-w-[200px] border rounded p-2 flex-shrink-0 bg-white shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
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
        {featuredListings.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-[1.01]">
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
                  <button className="text-blue-600 hover:text-blue-800"><FiMessageCircle size={18} /></button>
                  <button className="text-green-600 hover:text-green-800"><FiPhone size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white py-2 border-t">
        <button className="flex flex-col items-center text-orange-500 text-sm"><BiHomeAlt />Home</button>
        <button className="flex flex-col items-center text-gray-500 text-sm">🔍 Explore</button>
        <button className="flex flex-col items-center text-gray-500 text-sm"><FaRegHeart />Favorite</button>
        <button className="flex flex-col items-center text-gray-500 text-sm">💬 Messages</button>
        <button className="flex flex-col items-center text-gray-500 text-sm">👤 Profile</button>
      </div>
    </div>
  );
}
