import React, { useState } from "react";

const Stepper = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Stepper Header */}
      <div className="flex items-center w-full max-w-xl">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex items-center">
            {/* Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
              ${
                index + 1 <= currentStep
                  ? "bg-blue-500 border-blue-500 text-white " 
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  index + 1 < currentStep ? "bg-blue-500 transition-all duration-300 ease-in-out" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">
          {steps[currentStep - 1]} Content
        </h2>
        <p className="text-gray-600 mt-2">
          This is some description for {steps[currentStep - 1]}.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
