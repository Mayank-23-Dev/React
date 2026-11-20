import React, { useState } from "react";

const Forms = () => {
  let users = [];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handledata = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-4 w-100 p-5">
      <input
        name="name"
        className="border-2 rounded-xl"
        onChange={handledata}
        type="text"
        placeholder="Name"
        />
      <input
        name="email"
        className="border-2 rounded-xl"
        onChange={handledata}
        type="email"
        placeholder="Email"
        />
      <input
        name="password"
        className="border-2 rounded-xl"
        onChange={handledata}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={() => {
          users.push(formData);
          console.log(users);
        }}
        className="border-2 rounded-xl bg-emerald-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Forms;
