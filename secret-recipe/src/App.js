import React, { useEffect, useState } from "react";
import "./App.css";
import schema from "./schema";
import * as yup from "yup";
// import Confirmation from "./Confirmation.js";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import SignUp from "./Form";
import Login from "./login";

const initialFormValues = {
  name: "",
  username: "",
  level: "",
  american: false,
  mexican: false,
  french: false,
  italian: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const initialDisabled = true;
const userList = [];

function App() {
  const [users, setUsers] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err, "couldnt post it");
      })
      .finally(() => {});
  };
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const inputChange = (name, value) => {
    console.log(name, value);
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      passwordConfirmation: formValues.passwordConfirmation.trim(),
      level: ["novice", "homeCook", "hobbyist", "private", "pro"].filter(
        (lvl) => formValues[lvl]
      ),
    };
    postNewUser(newUser);
  };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div className="container">
      <header>
        <h1>Secret family recipes</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Sign Up!</Link> <Link to="/login">Log In</Link>
      </nav>

      <div className="landing"></div>
      <Switch>
        <Route path="/form">
          <SignUp
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/confirmation">
          <Confirmation values={formValues} />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
