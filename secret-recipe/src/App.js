import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./Components/users";
import schema from "./Components/schema";
import * as yup from "yup";
import Confirmation from "./Components/Confirmation.js";
import { Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import SignUp from "./Components/Form";
import Login from "./Components/login";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err, "i messed up");
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data);
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
      level: formValues.level.trim(),
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

  useEffect(() => {
    getUsers();
  }, []);

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
      </nav>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route
                  path="/home"
                  component={() => {
                    window.location.href =
                      "https://secret-family-recipies.netlify.app/recipes.html";
                    return null;
                  }}
                />

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
                    submit={formSubmit}
                    disabled={disabled}
                    errors={formErrors}
                  />
                </Route>
                <Route path="/confirmation">
                  <Confirmation values={formValues} />
                  {users.map((user) => {
                    return <User key={users.id} values={user} />;
                  })}
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <footer>
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
        </nav>
        <div className="navborder">
          <p>Copyright Ⓒ 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
