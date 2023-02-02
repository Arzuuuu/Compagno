import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      
      <form className="login-form" onSubmit={handleSubmit}>

        {/* <div className="email"> */}
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourname@gmail.com"
          id="email"
          name="email"
        />
        {/* </div> */}

        
        {/* <div class="password"> */}
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        {/* </div> */}

        {/* </div> */}
        <div class='c1'>
        
        <button type="submit">
          <b>Log In</b>
        </button>
        </div>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account?Register here.
      </button>
    </div>
  );
};
