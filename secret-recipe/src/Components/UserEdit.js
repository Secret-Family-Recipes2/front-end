import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axioswithauth";
import { useParams, useHistory } from "react-router-dom";

const initialForm = {
  title: "",
  source: "",
  description: "",
  category: "",
};

const UserEdit = () => {
  const history = useHistory();
  const params = useParams();
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/user-recipes/${params.id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editForm = (e) => {
    e.preventDefault();
    console.log("edit form plz");
    console.log(form);
    axiosWithAuth()
      .put(`/recipes/user-recipes/${params.id}`, form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={editForm}>
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
        <button>Edit</button>
      </form>
    </div>
  );
};

export default UserEdit;
