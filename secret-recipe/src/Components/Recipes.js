import React, { useEffect } from "react";
import Recipe from "./Recipe";
import { axiosWithAuth } from "../utils/axioswithauth";

const dummyData = [
  {
    id: 1,
    title: "Easy Tuna Casserole",
    source: "Grandma May",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1439&h=753&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4560684.jpg",
    description:
      "yummy and quick casserole, thats been in our family for years",
    category: "dinner",
    username: "loveToCook82",
  },
  {
    id: 2,
    title: "Two-Ingredient Naan",
    source: "Great Uncle Joe",
    image: "https://lilluna.com/wp-content/uploads/2019/01/naan-2-768x655.jpg",
    description:
      "easy to make naan bread that our family makes together during holidays",
    category: "bread",
    username: "cool-chef-94",
  },
  {
    id: 3,
    title: "Roasted Butternut Squash ",
    source: "Great Grandmother Elda",
    image:
      "https://www.wellplated.com/wp-content/uploads/2017/11/Cinnamon-Roasted-Butternut-Squash-Easy-butternut-squash-recipe-600x809.jpg",
    description: "healthy side dish passed down from generation to generation",
    category: "side dish",
    username: "loveToCook82",
  },
  {
    id: 4,
    title: "Test Recipe 1",
    source: "source 1",
    image: "img_url_1",
    description: "description 1",
    category: "test category",
    username: "testUser1",
  },
  {
    id: 6,
    title: "Test Recipe 2",
    source: "source 2",
    image: "img_url_2",
    description: "description 2",
    category: "test category",
    username: "testUser1",
  },
];

const Recipes = () => {
  useEffect(() => {
    axiosWithAuth()
      .get("/recipes/all")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>This is the List</p>
      {dummyData.map((item) => {
        return <Recipe key={item.id} details={item} />;
      })}
    </div>
  );
};

export default Recipes;
