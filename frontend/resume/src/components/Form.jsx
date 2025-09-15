import React from "react";

const Form = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-1/2 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 border-b pb-2">
        Build Your Resume
      </h2>

      <div className="flex flex-col gap-4">
        <inp
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 h-24"
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 h-24"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 h-24"
        />
      </div>
    </div>
  );
};

export default Form;
