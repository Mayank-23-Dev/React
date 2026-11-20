import React, { useState } from "react";
import Register from "./Auth Components/Register";
import Signin from "./Auth Components/Signin";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Signin setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
