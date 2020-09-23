import React, { useEffect, useState } from "react";
import "./App.css";
import schema from "./Components/schema";
import * as yup from "yup";
import Confirmation from "./Components/Confirmation.js";
import { Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import SignUp from "./Components/Form";
import Login from "./Components/login";
import "./App.css";
import Recipes from "./Components/Recipes";
import { axiosWithAuth } from "./utils/axioswithauth";
import PrivateRoute from "./Components/PrivateRoute";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  // passwordConfirmation: "",
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
  // passwordConfirmation: "",
};

const initialDisabled = true;
const userList = [];

function App() {
  const [users, setUsers] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    const info = {
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
    };

    axios
      .post(
        "https://bw-secret-family-recipes.herokuapp.com/auth/register",
        info
      )
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.message, "couldnt post it");
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
      level: formValues.level.trim(),
      username: formValues.username.trim(),
      // american: formValues.american,
      // french: formValues.french,
      // italian: formValues.italian,
      // mexican: formValues.mexican,

      // passwordConfirmation: formValues.passwordConfirmation.trim(),
      styles: ["american", "mexican", "french", "italian"].filter(
        (sty) => formValues[sty]
      ),
    };
    postNewUser(newUser);
  };

  const loginSubmit = () => {
    const loginValue = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    console.log("login submitted!");
    axiosWithAuth()
      .post("/auth/login", loginValue)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <div className="navborder">
        <br></br>
      </div>
      <header>
        <h1>Secret Family Recipes</h1>
      </header>
      <nav className="navbar">
        <div>
          <NavLink
            to="/home"
            activeStyle={{ color: "white", fontWeight: "bold" }}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/form"
            activeStyle={{ color: "white", fontWeight: "bold" }}
          >
            Sign Up!
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/login"
            activeStyle={{ color: "white", fontWeight: "bold" }}
          >
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/recipes"
            activeStyle={{ color: "white", fontWeight: "bold" }}
          >
            Recipes
          </NavLink>
        </div>
      </nav>

      <Switch>
        <Route
          path="/home"
          component={() => {
            window.location.href =
              "https://secret-family-recipies.netlify.app/recipes.html";
            return null;
          }}
        />
        <PrivateRoute exact path="/recipes">
          <Recipes />
        </PrivateRoute>

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
          <Login
            values={formValues}
            change={inputChange}
            submit={loginSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation values={formValues} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
