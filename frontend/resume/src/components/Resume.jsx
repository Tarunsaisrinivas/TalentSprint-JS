import React from "react";

const Resume = ({ formData }) => {
  return (
    <div className="w-1/2 bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-3xl font-extrabold text-gray-800">
          {formData.name || "Your Name"}
        </h1>
        <p className="text-gray-600">
          {formData.email || "your.email@example.com"} |{" "}
          {formData.phone || "+91-0000000000"}
        </p>
        <p className="text-gray-500">{formData.address || "Your Address"}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎓 Education</h2>
        <p className="text-gray-700">
          {formData.education || "Add your education details here..."}
        </p>
      </div>

      
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">💼 Experience</h2>
        <p className="text-gray-700">
          {formData.experience || "Add your work experience here..."}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">🛠 Skills</h2>
        <p className="text-gray-700">
          {formData.skills || "Add your skills here..."}
        </p>
      </div>
    </div>
  );
};

export default Resume;
