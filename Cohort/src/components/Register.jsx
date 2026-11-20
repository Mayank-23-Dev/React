import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formdata]);
    setFormdata({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-[#676666a7] scale-200 items-center justify-center text-white p-10 rounded-2xl backdrop-blur-2xl flex flex-col gap-4">
      <form onSubmit={handlesubmit} className="flex flex-col gap-4">
        <input
          required
          name="username"
          value={formdata.username}
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-[5px] px-2 outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          required
          name="email"
          value={formdata.email}
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-[5px] px-2 outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="password"
          value={formdata.password}
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-[5px] px-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-white text-black rounded-[5px] p-1 cursor-pointer"
        >
          Register
        </button>
      </form>
      <p className="text-black">
        Already have an account{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="underline cursor-pointer hover:text-white"
        >
          Login Here
        </span>
      </p>
    </div>
  );
};

export default Register;
