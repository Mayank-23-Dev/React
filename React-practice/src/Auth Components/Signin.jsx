import React from "react";

const Signin = ({ setToggle }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-gray-300 border w-fit p-6 rounded shadow">
        <h1 className="flex justify-center">Login</h1>

        <form action="" className="flex flex-col gap-3 py-8 ">
          <input
            className="border outline-none px-1.5 rounded-sm"
            type="text"
            placeholder="name"
          />

          <input className="border" type="email" placeholder="email" />

          <input className="border" type="password" placeholder="password" />

          <button className="border" type="submit">
            Signin
          </button>
          <p onClick={() => setToggle((prev) => !prev)}>
            Don't have an account?{" "}
            <span className="cursor-pointer underline">Signup</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
