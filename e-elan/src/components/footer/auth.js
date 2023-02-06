import React, { useState } from "react";
import "./auth.css";

const LoginPage = () => {
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
    console.log("Username : ", username);
    console.log("Password : ", password);
  };

  return (
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
      <button type="submit" id="submit_btn">Submit</button>
    </form>
  );
};

export default LoginPage;
