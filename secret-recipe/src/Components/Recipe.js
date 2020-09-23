import React from "react";

const Recipe = (props) => {
  const { title, source, category, description } = props.details;
  return (
    <div>
      <p>{title}</p>
      <p>{source}</p>

      <p>{description}</p>

      <p>{category}</p>

      <p>ENDDD</p>
    </div>
  );
};

export default Recipe;
