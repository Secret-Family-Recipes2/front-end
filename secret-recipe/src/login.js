import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="login">
      <h2>Please log-in to continue</h2>
      <label>
        {""}
        Username
        <input
          //   value={values.username}
          //   onChange={onChange}
          name="username"
          type="text"
        />
      </label>

      <label>
        {""}
        Password
        <input
          //   value={values.password}
          //   onChange={onChange}
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
        {/* <div>{errors.username}</div>
        <div>{errors.password}</div> */}
      </div>
    </div>
  );
}
