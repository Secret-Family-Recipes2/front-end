import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation({ values }) {
  return (
    <div className="confirmation">
      <h2> Thanks for signing-up {values.name}.</h2>

      <Link to="/">Click here to return to home</Link>
    </div>
  );
}
