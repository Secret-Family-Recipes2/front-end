import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axioswithauth";

const Recipe = () => {
  const params = useParams();

  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/all/${params.id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/all/${params.id}/ingredients`)
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/all/${params.id}/instructions`)
      .then((res) => {
        console.log(res.data);
        setInstructions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 style={{ fontSize: "3rem" }}>{recipe.title}</h4>
      <img src={recipe.image} />
      <p>Ingredients:</p>
      {ingredients.map((item) => {
        return <ul>{item.ingredient}</ul>;
      })}
      <p>Instructions</p>
      {instructions.map((item) => {
        return <li>{item.instructions}</li>;
      })}
    </div>
  );
};

export default Recipe;
