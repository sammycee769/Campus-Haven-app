import { useState } from "react";

export default function ConfirmUpload() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      return setError("Only JPG, JPEG, and PNG files are allowed.");
    }

    // Validate file size
    if (file.size > 3 * 1024 * 1024) {
      return setError("File size must be less than or equal to 3MB.");
    }

    setError("");
    setImage(URL.createObjectURL(file));
  };

  const handleRetake = () => {
    setImage(null);
    setError("");
  };

  return (
    <>
    <div className='m-4 mb-0'>
            <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
            CampusHaven
            <a className="text-black underline" href="/verifyidentity">Go Back</a>
            </div>
            <hr class="border-t border-gray-600"/>
    </div>
    <div className=" flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Confirm upload</h2>
        <p className="text-gray-600 mb-4">
          Please check to ensure that the picture taken is clear and readable.
        </p>

        {!image ? (
          <>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="block mx-auto mb-4"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </>
        ) : (
          <>
            <img
              src={image}
              alt="Preview"
              className="rounded shadow-md mx-auto mb-4 max-h-60"
            />
            <button
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
              onClick={() => alert("Upload confirmed!")}
            >
              Confirm and Upload
            </button>
            <button
              className="text-sm text-gray-700 mt-3 underline"
              onClick={handleRetake}
            >
              Retake
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
}
