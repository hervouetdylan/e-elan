import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
//   const[user_id, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://e-elan48.000webhostapp.com/register.php',JSON.stringify({  
        // "user_id": user_id,
        "username": username,
        "email": email,
        "password": password,
        "isSeller": isSeller,
      }));


      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input 
        type="number"
        placeholder="User ID"
        value={user_id}
        onChange={(e) => setUserId(e.target.value)}
      /> */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <input
        type="checkbox"
        placeholder="isSeller"
        value={isSeller}
        onChange={(e) => setIsSeller(e.target.value)}
        />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
