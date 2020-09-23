import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

export default function Login(props) {
  const { values, submit, change, errors } = props;


  const history = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    history.push("/recipes");
  };


  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <div className="user-box">
        <label>
          {""}
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
      </div>
      <div className="user-box">
        <label>
          {""}
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
      </div>

      <Link to="/home">
        <button onClick={onSubmit} id="signIn"> Sign In</button>
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
