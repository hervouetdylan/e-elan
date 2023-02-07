import React, { useState } from "react";
import LoginPage from "./loginPage";
function  SignupPage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSuccess(true);
        setError(null);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>Sign up successful!</p>}
      {!success && <SignUpForm onSignUp={handleSignUp} />}
    </div>
  );
}

export default SignUpPage;