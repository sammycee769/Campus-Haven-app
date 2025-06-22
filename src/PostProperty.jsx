import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function PostProperty() {
    const [images, setImages] = useState([]);
    const maxFileSizeMB = 10;
  
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      const validImages = [];
  
      for (let file of files) {
        if (
          (file.type === 'image/jpeg' || file.type === 'image/png') &&
          file.size <= maxFileSizeMB * 1024 * 1024
        ) {
          validImages.push(URL.createObjectURL(file));
        } else {
          alert('Each file must be JPG or PNG and ≤ 10MB');
        }
      }
  
      setImages(validImages);
    };
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    location: '',
    address: '',
    type: '',
    newlyBuilt: '',
    furnishing: '',
    rooms: '',
    roomType: '',
    amenities: '',
    price: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'This field is required';
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert('Property Posted Successfully!');
    navigate('/home');
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Property Listing</h2>

      <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Add Photos*</label>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        multiple
        onChange={handleFileChange}
        className="mb-2"
      />
      <div className="flex gap-2 flex-wrap">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`upload-${idx}`} className="w-20 h-20 object-cover rounded" />
        ))}
      </div>
    </div>

      {[
        ['title', 'Apartment Title*'],
        ['location', 'Apartment Location*'],
        ['address', 'Apartment Address*'],
        ['type', 'Apartment Type*'],
        ['newlyBuilt', 'Newly Built*'],
        ['furnishing', 'Furnishing status*'],
        ['rooms', 'Number Of Rooms*'],
        ['roomType', 'Rooms Type*'],
        ['amenities', 'Amenities*'],
        ['price', 'Price*'],
        ['description', 'Description*']
      ].map(([name, label]) => (
        <div key={name} className="mb-4">
          <label className="block mb-1 text-sm font-medium">{label}</label>
          {name !== 'description' ? (
            <input
              type="text"
              name={name}
              value={form[name]}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
            />
          ) : (
            <textarea
              name={name}
              value={form[name]}
              onChange={handleChange}
              rows="3"
              className={`w-full border px-3 py-2 rounded ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
          )}
          {errors[name] && <p className="text-sm text-red-600 mt-1">{errors[name]}</p>}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-orange-500 text-white py-2 rounded"
      >
        Post Property
      </button>

      <p className="text-xs text-gray-600 mt-2">
        By clicking on the Post Property, you accept the <strong>Term of Use</strong>, confirm that you will abide by the Safety Tips, and declare that this posting does not include any Prohibited items.
      </p>
    </div>
  );
}
