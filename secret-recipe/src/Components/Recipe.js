import React from "react";

const Recipe = (props) => {
  const { title, source, category, description } = props.details;
  return (
    <div>
      <p style={{ color: "red" }}>{title}</p>
      <p>Made by: {source}</p>

      <p>{description}</p>

      <p>{category}</p>

      <p>ENDDD</p>
    </div>
  );
};

export default Recipe;
