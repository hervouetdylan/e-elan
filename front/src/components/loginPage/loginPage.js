import React, { useState } from "react";
import { Link } from "react-router-dom"

import "./loginPage.css";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <h2 id="title">Login</h2>
        <input
          id = "username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="password"
          id = "password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <Link to="/menu"><button type="submit" id="submit_btn">Submit</button></Link>
    </form>
    </div>
  );
};

export default LoginPage;
