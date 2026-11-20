import React, { useState } from 'react';
import { nanoid } from "nanoid";

const App2 = () => {
  const [render, setRender] = useState(0);
  const [user] = useState({
    name: nanoid(6),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl font-bold">My name is {user.name}</h1>
      <button
        className=" mt-5 text-3xl font-bold bg-red-600 text-white rounded-[9px] p-2 border-2 border-black"
        onClick={() => {
          user.name = nanoid(6);
          setRender(render + 1);
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default App2;
