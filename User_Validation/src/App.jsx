import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img
        src="./src/assets/BG.png"
        alt=""
        className="max-w-screen max-h-screen min-h-screen min-w-screen absolute"
      />
      <div className="w-[90vw] h-[90vh] bg-white rounded-3xl flex flex-col items-center justify-center opacity-45 backdrop-blur-xl">

      </div>
    </div>
  );
};

export default App;
