import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axioswithauth";
import { useHistory } from "react-router-dom";

const initialForm = {
  title: "",
  source: "",
  description: "",
  category: "",
};

const UserRecipe = () => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [form, setForm] = useState(initialForm);
  //   const [addForm, setAddForm] = useState([]);
  const history = useHistory();

  const submit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/recipes/user-recipes", form)
      .then((res) => {
        console.log("success with test piggy!");
        console.log(res);
        fetchTheData();
        setForm(initialForm);
      })
      .catch((err) => {
        console.log(err);
        console.log("piggy has failed");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes/user-recipes")
      .then((res) => {
        console.log(res.data);
        setUserRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchTheData = () => {
    axiosWithAuth()
      .get("/recipes/user-recipes")
      .then((res) => {
        console.log(res.data);
        setUserRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (ev, item) => {
    ev.preventDefault();
    axiosWithAuth()
      .delete(`/recipes/user-recipes/${item.id}	`)
      .then((res) => {
        console.log("successfully deleted");
        fetchTheData();
      })
      .catch((err) => console.log(err));
  };

  function routeToItem(ev, item) {
    ev.preventDefault();
    history.push(`/UserRecipe/${item.id}`);
  }

  return (
    <div>
      <form>
        <span>Title</span>
        <input
          type="text"
          name="title"
          onChange={(evt) => setForm({ ...form, title: evt.target.value })}
          placeholder=""
          value={form.title}
        ></input>
        <br />
        <span>Source</span>
        <input
          type="text"
          name="source"
          onChange={(evt) => setForm({ ...form, source: evt.target.value })}
          placeholder=""
          value={form.source}
        ></input>
        <br />
        <span>Description</span>
        <input
          type="text"
          name="description"
          onChange={(evt) =>
            setForm({ ...form, description: evt.target.value })
          }
          placeholder=""
          value={form.description}
        ></input>
        <br />
        <span>Category</span>
        <input
          type="text"
          name="category"
          onChange={(evt) => setForm({ ...form, category: evt.target.value })}
          placeholder=""
          value={form.category}
        ></input>
        <br />
        <button onClick={submit}>Add New Recipe!</button>
      </form>

      <h5>User's Recipes</h5>
      {userRecipes.map((item) => {
        return (
          <div onClick={(ev) => routeToItem(ev, item)}>
            <p>Title: {item.title}</p>
            <p>By: {item.source}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <button onClick={(ev) => handleDelete(ev, item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserRecipe;
