<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from "react-router-dom"

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données d'inscription à l'API pour l'enregistrement
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="email"
        id="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <Link to="/loginPage"><button type="submit">Sign up</button></Link>
    </form>
  );
};

export default SignUp;
=======
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './signup.css'

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données d'inscription à l'API pour l'enregistrement
  };
  return(
    <form class= "signUp" onSubmit={handleSubmit}>
      <input
        id="usernameSignUp"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        id="emailSignUp"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        id="passwordSignUp"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
    <div class="choosebtwcomorclient">
        <label for="test">Comercial<input type="radio" id="test"></input></label>
        <label for="test">Clients<input type="radio" id="test"></input></label>
    </div>
      <Link to="/loginPage">
        <button type="submit" class ="signUpButton">Sign up</button>
      </Link>
  </form>
  );
};

export default SignUp;
>>>>>>> 22b175fe00301576b95f9b8f36c224a87db5635a
