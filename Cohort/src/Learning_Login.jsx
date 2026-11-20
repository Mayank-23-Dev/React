import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Learning_Login = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="bg-[rgb(49,49,49)] h-screen flex items-center justify-center text-white">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setUsers={setUsers} setToggle={setToggle} />
      )}
    </div>
  );
};
export default Learning_Login;
