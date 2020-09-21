import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

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
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="formInputs">
        <label>
          {""}
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          {""}
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>

        <label>
          {""}
          Desired username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <h2>Select Experience Level</h2>
        <label>
          {""}
          Size
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
        <h2>Select Toppings</h2>

        <label>
          {""}
          pepperoni
          <input
            id="pep"
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
      </div>

      <div className="formsubmit">
        <Link to="/confirmation">
          <button id="button" disabled={disabled}>
            {" "}
            ORDER !
          </button>
        </Link>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.phone}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
        </div>
      </div>
    </form>
  );
}
