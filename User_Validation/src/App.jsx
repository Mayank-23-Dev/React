import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center select-none">
      <img
        src="./src/assets/BG.png"
        alt=""
        className="max-w-screen max-h-screen min-h-screen min-w-screen absolute -z-10"
      />
      <div className="w-[90vw] h-[90vh] rounded-3xl flex flex-col overflow-hidden">
        <div className="bg-white/60 backdrop-blur-sm drop-shadow-xl">
          <Navbar toggle={toggle} setToggle={setToggle} />
        </div>
        <div className="bg-white/20 flex w-full h-full backdrop-blur-md shadow-xl">
          
        </div>
      </div>
    </div>
  );
};

export default App;
