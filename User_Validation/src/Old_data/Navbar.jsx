import React from "react";
import logo from "../assets/image.png";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3.5 pb-2 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/95 to-transparent">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-zinc-200/80 shadow-sm shadow-zinc-200/40 px-4 sm:px-6 h-14 flex items-center justify-between transition-all">
        {/* Brand & Nav Segment */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo Tile */}
          <div
            onClick={() => setToggle(true)}
            className="h-8 w-8 rounded-xl bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-200 flex items-center justify-center p-1.5 shadow-2xs shrink-0 cursor-pointer hover:border-zinc-300 hover:scale-105 active:scale-95 transition-all"
            title="Home"
          >
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </div>

          <div className="h-4 w-px bg-zinc-200 hidden sm:block" />

          {/* Segmented Pill Navigation */}
          <nav className="flex items-center gap-1 bg-zinc-100/80 p-1 rounded-xl border border-zinc-200/50">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setToggle(true);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                toggle
                  ? "bg-white text-zinc-950 shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => e.preventDefault()}
              className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-white/50 transition-all cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => e.preventDefault()}
              className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-white/50 transition-all cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-xl text-xs font-semibold tracking-wide transition-all duration-150 active:scale-95 cursor-pointer shadow-xs hover:shadow-md hover:shadow-zinc-900/10"
          >
            {toggle ? (
              <>
                <span className="w-4 h-4 rounded-md bg-white/10 flex items-center justify-center text-white/90 group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
                <span>Add User</span>
              </>
            ) : (
              <>
                <span className="w-4 h-4 rounded-md bg-white/10 flex items-center justify-center text-white/90 group-hover:bg-white/20 transition-colors">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>View Users</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
