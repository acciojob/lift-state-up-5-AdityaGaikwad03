import React from "react";
import "./../styles/App.css";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parant Component</h1>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
