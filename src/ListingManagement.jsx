import React from 'react';

const dummyListings = [
  {
    id: 1,
    title: '1 Bedroom Flat - Alapomeji, Yaba',
    price: 'N350,000/year',
    status: 'Active',
    dateListed: '3 days ago'
  },
  {
    id: 2,
    title: 'Miniflat - Akoka',
    price: 'N300,000/year',
    status: 'Inactive',
    dateListed: '2 weeks ago'
  }
];

const ListingManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Your Listings</h2>
      <div className="space-y-4">
        {dummyListings.map((listing) => (
          <div key={listing.id} className="border rounded p-4 shadow bg-white">
            <h3 className="font-semibold text-lg">{listing.title}</h3>
            <p className="text-blue-600">{listing.price}</p>
            <p className="text-sm">Status: <span className={listing.status === 'Active' ? 'text-green-600' : 'text-red-500'}>{listing.status}</span></p>
            <p className="text-xs text-gray-500">Listed: {listing.dateListed}</p>
            <div className="flex space-x-4 mt-2">
              <button className="bg-yellow-400 text-white px-3 py-1 rounded">Edit</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingManagement;

