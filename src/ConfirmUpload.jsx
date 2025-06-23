import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function ConfirmUpload() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.file;

  if (!image) return <p className="text-center">No image uploaded.</p>;

  return (
    <>
    <div className='m-4 mb-0'>
            <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
            CampusHaven
            <Link to='/upload-id' className="text-black underline">Go Back</Link>
            </div>
            <hr class="border-t border-gray-600"/>
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-xl font-semibold">Confirm upload</h1>
      <p className="text-sm text-gray-600 mt-1 mb-4">Please check to ensure that the picture taken is clear and readable.</p>
      <img src={image} alt="Preview" className="w-72 h-auto rounded shadow mb-4" />
      <button onClick={() => navigate('/upload-success')} className="bg-orange-500 text-white px-6 py-2 rounded">Confirm and Upload</button>
      <button onClick={() => navigate('/upload-id')} className="text-sm text-gray-700 mt-2 underline">Retake</button>
    </div>
    </>
  );
}

