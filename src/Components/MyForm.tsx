import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function MyForm() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); //to prevent th hole page reload

    console.log(inputValue);
    setSubmitted(true); // Set the submitted state to true after form submission
    // setInputValue("");// to set the input field to void
  };
  return (
    <>
      <div>MyForm</div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={inputValue}
          aria-label="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {/* <ChildComponent inputValue={inputValue} /> */}
      {submitted && <ChildComponent inputValue={inputValue} />}
    </>
  );
}

export default MyForm;
