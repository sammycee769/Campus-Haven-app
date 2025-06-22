import { useNavigate } from 'react-router-dom';

export default function LocationPrompt() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-blue-100 rounded-full p-4 mb-4">
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0 0v6m0-6c2.485 0 4.5-2.015 4.5-4.5S14.485 2 12 2 7.5 4.015 7.5 6.5 9.515 11 12 11z" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold mb-2">What is your Location?</h2>
      <p className="text-gray-600 mb-6">We need to know your location in order to service your requests.</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded mb-2">Allow Location Access</button>
      <button onClick={() => navigate('/manual-location')} className="text-sm underline text-gray-700">Enter Location Manually</button>
    </div>
  );
}
