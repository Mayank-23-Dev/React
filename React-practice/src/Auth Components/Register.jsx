import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-gray-300 border w-fit p-6 rounded shadow">
        <h1 className="flex justify-center">Register</h1>

        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-3 py-8 "
        >
          <input
            name="name"
            onChange={handleChange}
            className="border"
            type="text"
            placeholder="name"
          />
          <input
            name="email"
            onChange={handleChange}
            className="border"
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            onChange={handleChange}
            className="border"
            type="password"
            placeholder="password"
          />

          <button className="border" type="submit">
            Register
          </button>
          <p onClick={() => setToggle((prev) => !prev)}>
            Already have an account?
            <span className="cursor-pointer underline">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
