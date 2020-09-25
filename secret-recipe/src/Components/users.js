import React from "react";

function User({ values }) {
  if (!values) {
    return <h3>Hang on a sec while I get that for you...</h3>;
  }

  return (
    <div className="userCard">
      <h2>
        Name: {values.first_name} {values.last_name} {values.name}
      </h2>
      <h4>Email: {values.email}</h4>
    </div>
  );
}

export default User;
