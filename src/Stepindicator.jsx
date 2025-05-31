import { useLocation } from "react-router-dom";

export default function StepIndicator() {
  const location = useLocation();

  const steps = [
    { label: "Step 1", path: "/landlordsignup" },
    { label: "Step 2", path: "/verifyemail" },
    { label: "Step 3", path: "/step3" }, // You can update this when you're ready
  ];

  const currentIndex = steps.findIndex((s) => s.path === location.pathname);

  // If current page is not part of the stepper, don't render it
  if (currentIndex === -1) return null;

  return (
    <div className="w-full max-w-md px-4 pt-4 mx-auto">
      <div className="flex justify-between mb-2 text-sm text-gray-500">
        {steps.map((step, index) => (
          <span
            key={index}
            className={index === currentIndex ? "text-blue-600 font-medium" : ""}
          >
            {/* {step.label} */}
          </span>
        ))}
      </div>
      <div className="relative w-full h-1 bg-gray-200 rounded-full">
        <div
          className="absolute h-1 bg-blue-600 rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / steps.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
