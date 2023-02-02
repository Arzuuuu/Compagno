import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Repass, setRePass] = useState("");
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Phno, setPhno] = useState("");
  const [usertype, setusertype] = useState("");
  const [Age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="Fname">
          <b>First name</b>
        </label>
        <input
          value={Fname}
          name="First Name"
          onChange={(e) => setFName(e.target.value)}
          id="Fname"
          placeholder="First Name"
        />

        <label htmlFor="Lname">
          <b>Last name</b>
        </label>
        <input
          value={Lname}
          name="Last Name"
          onChange={(e) => setLName(e.target.value)}
          id="Lname"
          placeholder="Last Name"
        />

        <br />

        <label htmlFor="usertype">
          <b>Please select a field: </b>&nbsp;&nbsp;
          <input
            type="radio"
            value={usertype}
            name="usertype"
            onChange={(e) => setusertype(e.target.value)}
            id="Patient"
          />{" "}
          Patient &nbsp;&nbsp;
          <input
            type="radio"
            value={usertype}
            name="usertype"
            onChange={(e) => setusertype(e.target.value)}
            id="Caregiver"
          />{" "}
          Caregiver
        </label>
        <br />

        <label htmlFor="gender">
          <b>Gender: &nbsp;&nbsp;</b>
          <select name="gender" id="gender">
            <option>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            <option value="Prefer-not-to-say">Prefer not to say</option>
          </select>
        </label>

        <br />

        <label htmlFor="Age">
          {" "}
          Age &nbsp;
          <input
            type="number"
            value={Age}
            name="Age"
            onChange={(e) => setAge(e.target.value)}
            id="Age"
          />
        </label>
        <br />
        <label htmlFor="Phno">
          <b>Phone Number</b>{" "}
        </label>
        <input
          value={Phno}
          name="Phno"
          onChange={(e) => setPhno(e.target.value)}
          type="number"
          id="Phno"
          placeholder="Enter Phone number"
        />

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

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />

        <label htmlFor="Repassword">
          <b>RePassword</b>
        </label>
        <input
          value={Repass}
          onChange={(e) => setRePass(e.target.value)}
          type="Repassword"
          placeholder="********"
          id="Repassword"
          name="Repassword"
        />
        <br />

        <div class="c1">

        <span></span>
      <span></span>
      <span></span>
      <span></span>
        <button type="submit">
          <b>Register</b>
        </button>
        </div>

        {/* <label htmlFor=""></label> */}
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account?Login here.
      </button>
    </div>
  );
};
