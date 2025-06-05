export default function UploadSuccess() {
    return (
    <>
        <div className='m-4 mb-0'>
                <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
                CampusHaven
                <a className="text-black underline" href="/upload-id">Go Back</a>
                </div>
                <hr class="border-t border-gray-600"/>
        </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-green-600 mb-2">Upload Successful</h1>
          <p className="text-gray-700">Your ID has been uploaded successfully.</p>
        </div>
      </div>
    </>
    );
  }
  