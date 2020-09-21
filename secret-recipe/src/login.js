import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const { values, submit, disabled, errors } = props;
    const onChange = (evt) => {
        const { name, value} = evt.target;


        const onSubmit = (evt) => {
            evt.preventDefault();
            submit();
          };



  return (
    <div className="login">
      <h2>Please log-in to continue</h2>
      <label>
        {""}
        Username
        <input
          value={values.name}
          onChange={onChange}
          name="name"
          type="text"
        />
      </label>

      <label>
        {""}
        Password
        <input
          value={values.name}
          onChange={onChange}
          name="password"
          type="password"
        />
      </label>
      <Link to="/mainpage">
        <button id="signIn" disabled={disabled}>
          {" "}
          Sign In
        </button>
      </Link>

      <Link to="/form">
        <button id="signUp"> Sign-up</button>
      </Link>

      <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
         
    </div>
    </div>
  );
}
