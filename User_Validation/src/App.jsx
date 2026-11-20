import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center select-none">
      <img
        src="./src/assets/BG.png"
        alt=""
        className="max-w-screen max-h-screen min-h-screen min-w-screen absolute -z-1"
      />
      <div className="w-[90vw] h-[90vh] rounded-3xl flex flex-col overflow-hidden">
        <div className="bg-white opacity-75 backdrop-blur-3xl shadow-xl">
          <Navbar />
        </div>
        <div className="bg-white flex w-full h-full opacity-35 ">
          
        </div>
      </div>
    </div>
  );
};

export default App;
