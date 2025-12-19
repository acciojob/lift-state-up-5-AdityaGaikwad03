import React from "react";

export default function Child({onLogin}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
