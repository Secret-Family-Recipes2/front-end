import axios from "axios";
import { axiosWithAuth } from "../utils/axioswithauth";

export const FETCH_RECIPES = "FETCH_RECIPES";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";

const fetchRecipes = () => (dispatch) => {
  dispatch({ type: FETCH_RECIPES });

  axiosWithAuth()
    .get("/recipes/all")
    .then((res) => {
      console.log("async redux wins!");
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log("fetchRecipes actions failed");
      console.log(error);
    });
};

export { fetchRecipes };
