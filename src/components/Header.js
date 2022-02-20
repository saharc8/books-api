import React, { useEffect, useState } from "react";

const Header = ({ setResponse }) => {
  const [values, setValues] = useState("javascript");

  useEffect(() => {
    values && runSearch(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const runSearch = (values) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${values}`)
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="header">
      <span>
        <h1>BooksBox</h1>
        <h3>Find any book U want</h3>
      </span>
      <span>
        <input
          onChange={(e) => {
            setValues(e.target.value);
          }}
          type="text"
          className="search_input"
          placeholder="Search..."
          autoComplete="off"
          autoFocus
        />
      </span>
    </div>
  );
};

export default Header;
