import React, { useState } from "react";
import Signin from "./Auth_Components/Signin";
import Register from "./Auth_Components/Register";

const App3 = () => {
  const [currentView, setCurrentView] = useState("signup");

  const handleNavigate = (view) => {
    if (view === "signup" || view === "register") {
      setCurrentView("signup");
    } else if (view === "signin" || view === "login") {
      setCurrentView("signin");
    } else {
      setCurrentView((prev) => (prev === "signin" ? "signup" : "signin"));
    }
  };

  return currentView === "signin" ? (
    <Signin onNavigate={handleNavigate} />
  ) : (
    <Register onNavigate={handleNavigate} />
  );
};

export default App3;
