import React, { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-10">
      <div className="flex w-full max-w-6xl gap-6">
        <Form formData={formData} setFormData={setFormData} />

        <Resume formData={formData} />
      </div>
    </div>
  );
};

export default App;
