import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function SignUp(props) {
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
    <div className="formContainer">
      <form className="formContainer">
        <h2>Please enter your Information</h2>
        <div className="formInputs">
          <label>
            {""}
            Name:
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
            />
          </label>
          <br></br>
          <label>
            {""}
            Email:
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="email"
            />
          </label>
          <br></br>
          <label>
            {""}
            Desired Username:
            <input
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <br></br>
          <label>
            {""}
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>
          {/* <label>
          {""}
          Confirm Password
          <input
            value={values.passwordConfirmation}
            onChange={onChange}
            name="passwordConfirmation"
            type="password"
          />
        </label> */}

          <h2>Select Experience Level</h2>
          <label>
            {""}
            Level
            <select
              id="level"
              name="level"
              value={values.level}
              onChange={onChange}
            >
              <option value=""> ---Select One---</option>
              <option value="novice"> Novice</option>
              <option value="homeCook"> Home Cook</option>
              <option value="hobbyist"> Cook for Fun </option>
              <option value="private"> Private Chef</option>
              <option value="pro"> Pro</option>
            </select>
          </label>
        </div>

        <div>
          <h2>Cooking styles that interest you</h2>

          <label>
            {""}
            American
            <input
              id="american"
              type="checkbox"
              name="american"
              checked={values.american}
              onChange={onChange}
            />
          </label>

          <label>
            {""}
            Mexican
            <input
              id="mexican"
              type="checkbox"
              name="mexican"
              checked={values.mexican}
              onChange={onChange}
            />
          </label>
          <label>
            {""}
            French
            <input
              id="french"
              type="checkbox"
              name="french"
              checked={values.french}
              onChange={onChange}
            />
          </label>
          <label>
            {""}
            Italian
            <input
              id="italian"
              type="checkbox"
              name="italian"
              checked={values.italian}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="formsubmit">
          <Link to="/confirmation">
            <button onClick={onSubmit} id="button">
              {" "}
              Sign me up!
            </button>
          </Link>

          <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.level}</div>
            <div>{errors.styles}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
