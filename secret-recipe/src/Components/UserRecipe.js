import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axioswithauth";

const UserRecipe = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/recipes/user-recipes")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>This is User Recipe</div>;
};

export default UserRecipe;
