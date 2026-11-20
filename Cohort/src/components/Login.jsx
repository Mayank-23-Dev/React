import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="bg-[#676666a7] scale-200 items-center justify-center text-white p-10 rounded-2xl backdrop-blur-2xl flex flex-col gap-4">
      <form action="" className="flex flex-col gap-4">
        <input
          className="border-2 border-gray-200 rounded-[5px] px-2 outline-none"
          type="text"
          placeholder="Email"
          />
        <input
          
          className="border-2 border-gray-200 rounded-[5px] px-2 outline-none"
          type="text"
          placeholder="Password"
        />
        <button className="bg-white text-black rounded-[5px] p-1 cursor-pointer">
          Login
        </button>
      </form>
      <p className="text-black">
        Didn't have an account{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="underline cursor-pointer hover:text-white"
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
