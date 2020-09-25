import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axioswithauth";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipesActions";
import { useHistory } from "react-router-dom";

const Recipes = (props) => {
  const history = useHistory();

  function routeToItem(ev, item) {
    ev.preventDefault();
    history.push(`/recipes/${item.id}`);
  }
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/recipes/all")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    props.fetchRecipes();
  }, []);

  return (
    <div>
      <p style={{ fontSize: "3.5rem" }}>This is the List</p>
      {props.data.map((item) => {
        return (
          <div style={{ border: "dotted 2px", padding: "5px" }}>
            <p>{item.title}</p>
            <p>By: {item.source}</p>
            <button onClick={(ev) => routeToItem(ev, item)}>
              Click Here for More!
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
