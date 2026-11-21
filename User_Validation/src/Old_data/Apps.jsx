import React, { useState } from "react";
import Navbar from "./Navbar";
import Usercard from "./Usercard";
import Form from "./Form";


const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

  const handleDeleteUser = (indexToDelete) => {
    let updatedUsers = users.filter((_, idx) => idx !== indexToDelete);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-900 font-sans flex flex-col selection:bg-zinc-900 selection:text-white">
      <Navbar setToggle={setToggle} toggle={toggle} userCount={users.length} />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {toggle ? (
          <div>
            {/* Directory Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200/80">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
                  User Directory
                </h1>
                <p className="text-sm text-zinc-500 mt-1">
                  Manage registered platform users and verify active memberships.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-lg border border-zinc-200">
                  {users.length} {users.length === 1 ? "Member" : "Members"}
                </span>
                <button
                  onClick={() => setToggle(false)}
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-black text-white rounded-lg text-xs font-semibold tracking-wide transition-all active:scale-95 cursor-pointer shadow-xs"
                >
                  + Add User
                </button>
              </div>
            </div>

            {users.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {users.map((elem, idx) => (
                  <Usercard
                    key={idx}
                    user={elem}
                    onDelete={() => handleDeleteUser(idx)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 mb-4 shadow-2xs">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-zinc-900">
                  No users registered yet
                </h3>
                <p className="text-sm text-zinc-500 mt-1 max-w-sm">
                  The directory is currently empty. Create your first profile to begin populating the directory.
                </p>
                <button
                  onClick={() => setToggle(false)}
                  className="mt-5 px-4 py-2 bg-zinc-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  Register First User
                </button>
              </div>
            )}
          </div>
        ) : (
          <Form setUser={setUsers} setToggle={setToggle} users={users}/>
        )}
      </main>
    </div>
  );
};

export default App;
