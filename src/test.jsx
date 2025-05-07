import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function TestNav() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/login')}
        className="bg-blue-500 px-4 py-2 text-white rounded"
      >
        Go to Login
      </button>
    </div>
  );
}

