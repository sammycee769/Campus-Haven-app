import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function UploadID() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const isValid = selectedFile && ['image/jpeg', 'image/png', 'image/jpg'].includes(selectedFile.type) && selectedFile.size <= 3 * 1024 * 1024;
    if (isValid) {
      setFile(selectedFile);
    } else {
      alert('Only .jpg, .jpeg and .png under 3MB are allowed.');
    }
  };

  const handleUpload = () => {
    if (file) {
      navigate('/confirm-upload', { state: { file: URL.createObjectURL(file) } });
    } else {
      alert('Please choose a valid file first.');
    }
  };

  return (
    <>
    <div className='m-4 mb-0'>
            <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
            CampusHaven
            <Link to="/verifyidentity" className="text-black underline">Go Back</Link>
            </div>
            <hr class="border-t border-gray-600"/>
    </div>
   
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-xl font-semibold mb-2">Upload Photos</h1>
      <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center border border-gray-300 rounded-md w-60 h-40 bg-gray-100">
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 12l1.5-1.5a2.121 2.121 0 013 0L12 13l3.5-3.5a2.121 2.121 0 013 0L20 12M12 4v4" />
        </svg>
        <p className="mt-2 text-sm text-gray-700">Upload Photos</p>
        <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
      <p className="text-sm text-gray-600 mt-2">Supported formats: .jpg, .jpeg, .png (max 3MB)</p>
      <button onClick={handleUpload} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Start Upload</button>
    </div>
    </>
  );
}
