import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import ItemSelected from "./ItemSelected";
import Random from "./Random";

const Search = () => {
  const [values, setValues] = useState("");
  const [response, setResponse] = useState({});
  const [itemSelected, setItemSelected] = useState("");

  useEffect(() => {
    const timerSearch = setTimeout(() => {
      values && runSearch(values);
    }, 500);
    return () => {
      clearTimeout(timerSearch);
    };
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(values);
  };

  const runSearch = (values) => {
    axios
      .get(
        //key=AIzaSyAOKGU_1e7pH22ciKtE9jIHDxx0F9ZpRRs
        `https://www.googleapis.com/books/v1/volumes?q=${values}+intitle:keyes&key=AIzaSyAOKGU_1e7pH22ciKtE9jIHDxx0F9ZpRRs`
      )
      .then((response) => {
        console.log(response);
        setResponse(response.data);
      })
      .catch((err) => console.log("error", err));
  };

  const selectedItemView = (item) => {
    setItemSelected(item);
    setResponse({});
    document.getElementById("search").reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search" id="search">
        <input
          onChange={(e) => {
            setValues(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
          name="term"
          className="search-input"
          placeholder="search..."
          autoComplete="off"
          autoFocus
        />
      </form>
      {response.items &&
        response.items
          .slice(0, 10)
          .map((item) => (
            <Item
              key={item.id}
              item={item}
              selectedItemView={selectedItemView}
            />
          ))}
      {itemSelected && (
        <ItemSelected key={itemSelected.id} itemSelected={itemSelected} />
      )}
      {!itemSelected && <Random />}
    </>
  );
};

export default Search;
