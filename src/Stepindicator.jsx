import { useLocation } from "react-router-dom";

export default function StepIndicator() {
  const location = useLocation();
  const stepMap = {
    "/": 1,
    "/step2": 2,
    "/step3": 3,
  };
  const currentStep = stepMap[location.pathname] || 1;

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md p-4">
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-600 mb-1">Step {currentStep}</p>
      <div className="flex gap-2">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`h-1 w-full rounded-full ${
              currentStep === step ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
