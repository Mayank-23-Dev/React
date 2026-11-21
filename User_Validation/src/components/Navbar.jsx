import React from "react";
import { MoveRight } from "lucide-react";
const Navbar = ({ toggle, setToggle }) => {
  return (
    <div className="flex w-full h-[70px] p-4 items-center justify-between pr-8">
      <div className="flex items-center px-3 gap-3">
        <svg
          width="8"
          height="8"
          viewBox="0 0 510 456"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 shrink-0 invert"
        >
          <path
            d="M279 0L0 455.5H145C145 455.5 334 146.5 365 99C378 74.5 387.5 84 387.5 99V206.5H404.5V23C396.5 4 377 0 377 0H279Z"
            fill="white"
          />
          <path
            d="M396.5 240.5C381.5 341 289 347 289 347C289 347 382.5 354 397 455C414.5 348.5 509.5 347 509.5 347C509.5 347 412 342 396.5 240.5Z"
            fill="white"
          />
          <mask id="stroke0_6_43" fill="white">
            <path d="M279 0L0 455.5H145C145 455.5 334 146.5 365 99C378 74.5 387.5 84 387.5 99V206.5H404.5V23C396.5 4 377 0 377 0H279Z" />
            <path d="M396.5 240.5C381.5 341 289 347 289 347C289 347 382.5 354 397 455C414.5 348.5 509.5 347 509.5 347C509.5 347 412 342 396.5 240.5Z" />
          </mask>
          <path
            d="M0 455.5L279 0H377C377 0 396.5 4 404.5 23V206.5H387.5V99C387.5 84 378 74.5 365 99C334 146.5 145 455.5 145 455.5H0ZM289 347C289 347 381.5 341 396.5 240.5C412 342 509.5 347 509.5 347C509.5 347 414.5 348.5 397 455C382.5 354 289 347 289 347Z"
            strokeWidth="2"
            stroke="white"
            mask="url(#stroke0_6_43)"
          />
        </svg>
        <h1 className="text-black text-2xl font-bold font-sans-serif">
          Directory
        </h1>
      </div>
      <div>
        {toggle ? (
          <div className="flex gap-10">
            {" "}
            <button onClick={() => setToggle(false)} className="cursor-pointer">
              Directory
            </button>
            <button
              onClick={() => setToggle(true)}
              className="bg-black text-white px-5 p-1 rounded-2xl cursor-pointer"
            >
              Add User
            </button>
          </div>
        ) : (
          <div className="flex gap-10">
            <button
              onClick={() => setToggle(false)}
              className="bg-black text-white px-5 p-1 rounded-2xl cursor-pointer"
            >
              Directory
            </button>
            <button onClick={() => setToggle(true)} className="cursor-pointer">
              Add User
            </button>{" "}
          </div>
        )}
      </div>
      <div className="w-[10vw] flex flex-col items-center justify-center">
        <button className="bg-black text-white px-5 p-1 rounded-2xl cursor-pointer flex gap-1 items-center justify-center">
          {toggle ? <span>Directory</span> : <span>Add User</span>}
          <MoveRight size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
