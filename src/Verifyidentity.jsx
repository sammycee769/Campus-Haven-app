import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import StepIndicator from "./StepIndicator.jsx"

export default function VerifyIdentity() {
  const navigate = useNavigate();

  const idOptions = [
    { label: "NIN slip", route: "/upload-id" },
    { label: "International Passport", route: "/upload-id" },
    { label: "Driver’s License", route: "/upload-id" },
  ];

  return (
    <>
     <StepIndicator />
     <div className='m-4 mb-0'>
           <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
               CampusHaven
           </div>
           <hr class="border-t border-gray-600"/>
       </div>
    <div className=" flex items-center justify-center  px-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          verify your identity
        </h2>
        <p className="text-gray-600 mb-6">Upload your government issued ID</p>

        <h3 className="text-md font-semibold mb-4">Select your ID type:</h3>
        <div className="space-y-3">
          {idOptions.map(({ label, route }, index) => (
            <button
              key={index}
              onClick={() => navigate(route)}
              className="flex justify-between items-center w-full py-3 border-b border-gray-300 text-left hover:bg-gray-100"
            >
              <span>{label}</span>
              <FaChevronRight className="text-gray-500" />
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
