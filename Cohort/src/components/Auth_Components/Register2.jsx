import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-gray-300 border w-fit p-6 rounded shadow">
        <h1 className="flex justify-center text-xl font-bold">Register</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 py-8"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border bg-white px-2 py-1 rounded"
            type="text"
            placeholder="name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border bg-white px-2 py-1 rounded"
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border bg-white px-2 py-1 rounded"
            type="password"
            placeholder="password"
          />

          <button
            className="border bg-blue-600 text-white py-1 px-4 rounded cursor-pointer hover:bg-blue-700"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
          <p onClick={() => setToggle && setToggle((prev) => !prev)}>
            Already have an account?{" "}
            <span className="cursor-pointer underline font-medium">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
