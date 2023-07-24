import React from "react";
import { Link } from "react-router-dom";

function Books() {
  return (
    <>
      <div>BooksList</div>
      <li>
        <Link to="/book/1">Book1</Link>
      </li>
      <li>
        <Link to="/book/2">Book2</Link>
      </li>
    </>
  );
}

export default Books;
