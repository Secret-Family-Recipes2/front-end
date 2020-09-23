import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Confirmation({ values }) {
  return (
    <div className="confirmation">
      <h2> Thanks for signing-up {values.name}.</h2>
      <h3> Here are other Users with similar interests</h3>

      <Link to="/">Click here to return to home</Link>
    </div>
  );
}
