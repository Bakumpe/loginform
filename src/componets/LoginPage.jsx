import React, { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import Person from "../assets/person.webp";
import Password from "../assets/password.png";
import Email from "../assets/email.png";

function LoginPage() {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  let setError = "Invalid email or password";

  const handleLogin = () => {
    if (username === "admin" && email === "admin@admin.com" && password === "admin") {
      setIsLogged(true);
    } else {
     alert(setError);
      setIsLogged(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h1>Login Page</h1>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <img src={Person} alt="Username" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="inputs">
          <img src={Email} alt="Email" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <img src={Password} alt="Password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
        
        {isLogged ? <Welcome /> : null}

        
      </form>
    </div>
  );
}
export default LoginPage;
