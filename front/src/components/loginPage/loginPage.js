import React, { useState } from "react";
import axios from "axios";
import "./loginPage.css";

const LoginPage = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://e-elan48.000webhostapp.com/verifyLogin.php',JSON.stringify({  
        "username": username,
        "password": password,
      }));

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        id = "username"
        type="username"
        placeholder="username"
        value={username}
        onChange={(event) => setusername(event.target.value)}
      />
      <input
        id = "password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginPage;
